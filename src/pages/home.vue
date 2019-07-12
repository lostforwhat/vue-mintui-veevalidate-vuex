<template>
  <div style="background: white">
    <div>
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="home">
          首页
        </mt-tab-container-item>
        <mt-tab-container-item id="ehome">
          首页1
        </mt-tab-container-item>
        <mt-tab-container-item id="wybs">
          首页2
        </mt-tab-container-item>
        <mt-tab-container-item id="bmfw">
          首页3
        </mt-tab-container-item>
      </mt-tab-container>
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="home">
          <img slot="icon" src="@/assets/images/tab/home.png">
          首页
        </mt-tab-item>
        <mt-tab-item id="ehome">
          <img slot="icon" src="@/assets/images/tab/ehome.png">
          首页1
        </mt-tab-item>
        <mt-tab-item id="wybs">
          <img slot="icon" src="@/assets/images/tab/wybs.png">
          首页2
        </mt-tab-item>
        <mt-tab-item id="bmfw">
          <img slot="icon" src="@/assets/images/tab/bmfw.png">
          首页3
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        title: "首页",
        selected: "home"
      }
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
