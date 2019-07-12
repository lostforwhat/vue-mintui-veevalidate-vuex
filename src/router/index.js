/**
 * 路由注册入口
 */


import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import { MessageBox } from 'mint-ui'
import { Indicator } from 'mint-ui';
import menu from './menu'
import home from './home'
import error from './error'
import login from './login'
import gjj from './gjj'
import bmgg from './bmgg'
import sb from './sb'
import yb from './yb'
import cj from './cj'
import other from './other'
import kqzl from './kqzl'
import slfw from './slfw'
import qycx from './qycx'
import szjc from './szjc'
import wzgg from './wzgg'
import ylbx from './ylbx'
import sybx from './sybx'
import bdcwxjj from './bdcwxjj'
import bdcdy from './bdcdy'
import xxgk from './xxgk'
import zwzx from './zwzx'
import smk from './smk'
import zccx from './zccx'
import gzf from './gzf'
import jj120 from './jj120'
import sdq from './sdq'

Vue.use(Router)

const router = new Router({
    base: store.getters.contextPath,
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {//前进返回按钮
        return savedPosition
      } else {//其他路由
        return { x: 0, y: 0 }
      }
    },
    routes: [
        ...home,//主页
        ...menu,
        ...login,
        ...gjj,
        ...bmgg,
        ...sb,
        ...yb,
        ...cj,
        ...other,
        ...kqzl,
        ...slfw,
        ...qycx,
        ...szjc,
        ...wzgg,
        ...ylbx,
        ...sybx,
        ...bdcwxjj,
        ...xxgk,
        ...zwzx,
        ...smk,
        ...zccx,
        ...gzf,
        ...jj120,
        ...sdq,
        ...bdcdy,

        ...error //错误页放路由最后
    ]
})

router.beforeEach((to, from, next) => {
  store.commit('abortRequest');
  MessageBox.close();
  Indicator.close();
  if (to.meta.requireAuth) {
    if (store.getters.token) {
      next();
    } else {
      next({
        name: "login",  //指向登录界面
        params:{redirect: to.fullPath}
      });
    }
  } else {
    next(); //直接放行
  }

  if (to.fullPath === "/login") {
    if (store.getters.token) {
      next({
        path: from.fullPath
      });
    } else {
      next();
    }
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
});

export default router

