/**
 * http请求封装，全局使用，请勿改动
 */

import Vue from 'vue'
/*引入资源请求插件*/
import VueResource from 'vue-resource';
import router from '../router'
import store from '../store'


/*使用VueResource插件*/
Vue.use(router);
Vue.use(VueResource);
Vue.use(store);

// const preffix = '/smej/api';
const preffix = store.getters.contextPath + '/api';

let httpSend = (reqType, url, params, callback, errback, autoLoading) => {
  if(typeof errback === 'undefined'){
    autoLoading = true;
  }else if(typeof errback === 'boolean'){
    autoLoading = errback;
    errback = null;
  } else if(typeof autoLoading === 'undefined'){
    autoLoading = true;
  }
  if(autoLoading){
    Vue.$indicator.open();
  }
  return new Promise(
    (resolve, reject) =>{
      url = preffix + url;
      let config = {
        emulateJSON: true,
        before(request) {
          store.commit('pushRequest', request);
        }
      };
      /*在header中设置token*/
      let token = store.getters.token;
      Vue.http.headers.common['token'] = token;
      reqType = reqType.toLowerCase();
      let httpResponse = null;
      if(['get','head','delete','jsonp'].includes(reqType)){
        httpResponse = Vue.http[reqType](url, config);
      } else {
        httpResponse = Vue.http[reqType](url, params, config);
      }
      httpResponse.then(
        (res) => {
          if(autoLoading){
            Vue.$indicator.close();
          }
          if(res.data != null  && res.data.success){
            resolve(res.data.data);
          } else {
            reject(res);
          }
        },
        (err) => {
          if(autoLoading){
            Vue.$indicator.close();
          }
          if(err && err.status && err.data === '' && err.status === 0){//被终止的请求
            return;
          }
          reject(err);
        }
      )
    }
  ).then((data) => {
      callback(data);
    },(err) => {
      if(typeof(errback) == "function"){
        errback(err);
      } else{
        /*默认失败处理*/
        handleErr(err);
      }
    }
  );
}

let handleErr = (err) => {
  if((typeof err === 'undefined') || (typeof err == 'null')
    || (typeof (err.data) === "undefined")|| (typeof (err.data) == 'null')){
    return;
  }
  let code = err.status;
  let msg = '系统异常，请稍候再试';
  if(err.data != null && (typeof err.data) == 'object' && err.data.code != 0){
    code = err.data.code;
    msg = err.data.msg;
  }
  let params = {
    msg: msg,
    code: code,
    error: 'error',
    backUrl: router.currentRoute.fullPath
  };
  if(/^50\d/.test(code)){
    router.replace({name: 'error50x' , params: params});
  } else if(/^40\d/.test(code)){
    router.replace({name: 'error40x' , params: params});
  } else if(code == -1 && msg.indexOf("认证不通过") != -1){
    Vue.$toast(msg);
    store.commit('updateToken', '');
    router.push({path:'/login'});
  }else{
    router.replace({name: 'blank' , params: params});
  }
}

export default({
  httpGet(url, callback, errback, autoLoading){
    httpSend('get', url, null, callback, errback, autoLoading);
  },
  httpPost(url, params, callback, errback, autoLoading){
    httpSend('post', url, params, callback, errback, autoLoading);
  },
  handleErr
});
