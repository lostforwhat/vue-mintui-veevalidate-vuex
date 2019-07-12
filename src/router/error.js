/*err-page router*/

export default [
  /*自定义路由请写在404错误页前面*/
  {/*空白页*/
    path: '/blank',
    name: 'blank',
    meta: {
      title: '暂无内容'
    },
    component: resolve => require(['@/pages/error/blank'], resolve)
  },
  {
    path: '/error50x',
    name: 'error50x',
    meta: {
      title: '错误页面'
    },
    component: resolve => require(['@/pages/error/error50x'], resolve)
  },
  {
    path: '/error40x',
    name: 'error40x',
    meta: {
      title: '错误页面'
    },
    component: resolve => require(['@/pages/error/error40x'], resolve)
  },
  {/*50*错误页*/
    path: '/error50*',
    redirect: '/error50x'
  }
  ,
  {/*40*错误页*/
    path: '/error40*',
    redirect: '/error40x'
  },
  {/*404错误页*/
    path: '*',
    redirect: '/error404'
  }
]
