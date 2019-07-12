export default [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: resolve => require(['@/pages/home'], resolve)
  }
]
