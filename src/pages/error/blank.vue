<template>
  <div class="err-content" :style="{ height: errHeight + 'px' }" ref="errdiv">
    <div class="err-img">
      <img width="150px" height="100px" :src="imgUrl.src">
      <p style="font-size: 16px;color: #a1a1a1">{{msg}}</p>
      <mt-button size="small" @click.native="refreshPage"><i class="fa fa-refresh"></i> 重新加载
      </mt-button>
      <mt-button size="small" icon="back" @click.native="$router.go(-1)">返回上一页</mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "blank",
    data() {
      return {
        imgUrl: {src: require('@/assets/images/img_81.png')},
        msg: "暂无数据",
        error: "",
        code: "",
        errHeight: 0,
        backUrl: ''
      }
    },
    mounted() {
      this.errHeight = document.documentElement.clientHeight - this.$refs.errdiv.getBoundingClientRect().top;
      let err = this.$route.params;
      this.showErr(err);
    },
    methods: {
      showErr(err) {
        if (err != null && err.code != null) {
          this.msg = err.msg;
          this.error = err.error;
          this.code = err.code;
          this.backUrl = err.backUrl;
        }
      },
      refreshPage(){
        this.$router.replace(this.backUrl);
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/error.css";
</style>
