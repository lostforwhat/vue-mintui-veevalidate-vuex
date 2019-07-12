/*login-page router*/

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: resolve => require(['@/pages/login/login'], resolve)
  }
]
