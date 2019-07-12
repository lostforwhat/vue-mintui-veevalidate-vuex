<template>
  <div style="background: white">
    <div>
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="home">
          <ihome></ihome>
        </mt-tab-container-item>
        <mt-tab-container-item id="ehome">
          <ehome></ehome>
        </mt-tab-container-item>
        <mt-tab-container-item id="wybs">
          <wybs></wybs>
        </mt-tab-container-item>
        <mt-tab-container-item id="bmfw">
          <bmfw></bmfw>
        </mt-tab-container-item>
      </mt-tab-container>
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="home">
          <img slot="icon" src="@/assets/images/tab/home.png">
          首页
        </mt-tab-item>
        <mt-tab-item id="ehome">
          <img slot="icon" src="@/assets/images/tab/ehome.png">
          我的e家
        </mt-tab-item>
        <mt-tab-item id="wybs">
          <img slot="icon" src="@/assets/images/tab/wybs.png">
          我要办事
        </mt-tab-item>
        <mt-tab-item id="bmfw">
          <img slot="icon" src="@/assets/images/tab/bmfw.png">
          便民服务
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
  import ihome from './menu/ihome'
  import ehome from './menu/ehome'
  import wybs from './menu/wybs'
  import bmfw from './menu/bmfw'

  export default {
    name: 'home',
    data() {
      return {
        title: "首页",
        selected: "home"
      }
    },
    components:{
      ihome,
      ehome,
      wybs,
      bmfw
    }
  }

</script>

<style scoped>

  body {
    background-color: white;
  }

  .mint-tab-container{
    margin-bottom: 60px;
    overflow-y :auto
  }

  .mint-tab-container-item{

  }
</style>
