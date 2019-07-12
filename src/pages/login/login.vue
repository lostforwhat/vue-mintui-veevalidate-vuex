<template>
  <div>
    <div style="margin-top: 10px;background: white">
      <mt-field label="身份证号:" name="idCard" placeholder="请输入您的身份证号码" v-model="idCard" v-validate="'required|IDCard'" data-vv-as="身份证号码"></mt-field>
      <div class="line"></div>
      <mt-field label="密码:" name="password" placeholder="请输入您的密码" type="password" v-model="password" v-validate="'required|min:6'" data-vv-as="密码"></mt-field>
      <div class="line"></div>
      <!--<mt-field label="手机号码:" placeholder="请输入您的手机号码" type="tel" v-model="phone"></mt-field>
      <div class="line"></div>-->
      <div class="btn-foot">
        <mt-button type="primary" size="large" @click.native="loginCheck">登录</mt-button>
      </div>
    </div>
  </div>

</template>
<script>

  export default {
    name: "login",
    data() {
      return {
        idCard: "",
        phone: "",
        password: "",
        token: "",
        redirectUrl: ""
      }
    },
    mounted() {
      this.redirectUrl = this.$route.params.redirect || '/';
    },
    watch: {
      idCard(val){
        this.idCard = val.toUpperCase();
      }
    },
    methods: {
      loginCheck() {
        this.$validate.validateForm(this.login)
      },
      login() {
        let url = '/login/login';
        let params = {
          username: this.idCard,
          password: this.password,
          phone: this.phone,
          sys: '002'
        };
        let that = this;
        that.$_http.httpPost(url, params, (res) => {
          that.token = res.token;
          if (that.token != null && that.token != '') {
            that.$toast("登录成功");
            // window.localStorage.setItem('token', that.token);
            that.$store.commit('updateToken', res.token);
            that.$router.replace(that.redirectUrl);
            that.$parent.isLogin = true;
          }
        }, (err) => {
          let msg = err.data.msg || '服务器异常，请稍候重试';
          that.$toast(msg);
        })
      }
    }
  }
</script>

<style scoped>
</style>
