# app
本项目已使用的依赖库
mint-ui             # UI库，全局通用，请优先使用该 UI库，以统一样式及减少样式冲突
font-awesome        # 字体图标库， 全局通用，请优先使用该小图标
mescroll.js         # 上拉下拉组件， 该组件使用keep-alive可能有异常，无需缓存列表页面时可使用
echarts             # 图表插件
vue-amap            # 高德地图插件
vee-validate        # 表单校验插件
sohu IP             # 获取客户端互联网ip

项目说明
页面组件开发路径/src/pages/
公共css路径/src/assets/css/
图片路径/src/assets/images/
公共js方法路径/src/assets/js/
自定义公共组件路径/src/components/
路由路径 /src/router/
公共过滤器 /src/filter/
自定义插件路径 /src/plugin/

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
