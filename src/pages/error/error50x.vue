<template>
  <div class="err-content" :style="{ height: errHeight + 'px' }" ref="errdiv">
    <div class="err-img">
      <img width="200px" height="140px" :src="imgUrl.src">
      <p style="font-size: 16px;color: #a1a1a1">{{msg}}&nbsp;&nbsp;错误代码：{{code}}</p>
      <mt-button size="small" icon="back" @click.native="$router.go(-1)">返回上一页</mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "error50x",
    data() {
      return {
        imgUrl: {src: require('@/assets/images/img_1.png')},
        msg: "服务器维护中，请稍候再试",
        error: "",
        code: 500,
        errHeight: 0
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
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/error.css";
</style>
