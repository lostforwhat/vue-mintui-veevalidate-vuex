import Vue from 'vue'
import AMap from 'vue-amap'

Vue.use(AMap)

AMap.initAMapApiLoader({
  key: "c09292141eddea0a771e4c9c5198e015",
  plugin: [
    "AMap.Scale", //右下角缩略图插件 比例尺
    "AMap.ToolBar", //地图工具条
    "Geolocation",  //定位插件
  ],
  uiVersion: "1.0.0"
});

export default ({

})
