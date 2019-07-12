<template>
  <div id="app" style="background: white">
    <mt-header :title="title" fixed >
      <router-link to="" slot="left" style="color:white" @click.native="$router.back(-1)">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <router-link to="" slot="right" style="color:white" v-if="isLogin" @click.native="logout">
        <mt-button icon="">退出登录</mt-button>
      </router-link>
      <router-link to="/login" slot="right" style="color:white" v-else>
        <mt-button icon="">登录</mt-button>
      </router-link>
    </mt-header>
    <div style="padding-top: 40px">
      <!--缓存界面-->
      <keep-alive :include="cachePages">
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'App',
    data(){
      return {
        title: '',
        cachePages: ['home'],
        isLogin: false
      }
    },
    mounted(){
      if(this.token){
        this.isLogin = true;
      }else {
        this.isLogin = false;
      }
    },
    computed:{
      ...mapGetters([
        'token'
      ])
    },
    watch: {
      token(val){
        if(val){//登录
          this.isLogin = true;
        } else {//登出
          this.isLogin = false;
        }
      }
    },
    methods:{
      logout(){
        this.$store.commit('updateToken', "");
        this.$toast("退出登录成功");
        this.$router.push("/");
      }
    }
  }
</script>

<style>

</style>
