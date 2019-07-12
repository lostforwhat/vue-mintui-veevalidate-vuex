import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

/**
 * 创建Vuex存储实例
 * @type {Store}
 */
const store = new Vuex.Store({
  state: {
    token: window.localStorage.getItem("token") || '',
    isLogin: false,
    contextPath: process.env.NODE_ENV === 'production' ? '/app' : '',
    requests: []
  },
  getters: {
    token: (state) => state.token,
    isLogin: (state) => {
      return state.token.length > 0
    },
    contextPath: (state) => state.contextPath
  },
  mutations: {
    updateToken(state, token) {
      state.token = token;
      window.localStorage.setItem("token", token);
    },
    pushRequest(state, request) {
      state.requests.push(request);
    },
    abortRequest({ requests }) {
      requests.forEach(req => {
        console.log(req);
        req.abort();
        console.log("已终止请求");
      })
      requests = [];
    }
  }
});

export default store
