// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/**
 * 入口文件，请勿随意改动
 */

import Vue from 'vue'
import App from './App'
import resource from './resource'
import router from './router'
import  './ui'
import './plugin'
import commonFilters from './filter'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$_http = resource


/*全局过滤器*/
for(let key in commonFilters){
  Vue.filter(key, commonFilters[key]);
}

new Vue({
  el: '#app',
  router,
  resource,
  store,
  components: {App},
  template: '<App/>'
})

