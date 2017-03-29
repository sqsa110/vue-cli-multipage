<template>
  <div class="login">
    <el-button @click="openLogin" >登录</el-button>
    <fd_alert title="登录" @alert_cancel="cancel" @alert_finish="finish" :showOff="login_show" :cancelOff="true" finishTitle="登录">
      <div slot="alert_title" class="login_title_main">
        <a href="javascript:;" @click="setActive('login')" class="login_title_name login_title_login" :class="[ active == 'login' ? 'active' : '' ]"> 登陆 </a>
        <a href="javascript:;" @click="setActive('register')" class="login_title_name login_title_register" :class="[ active == 'register' ? 'active' : '' ]"> 注册 </a>
      </div>
      <ul class="login_userinfo_main">
        <li v-show="active == 'login'">
          <fd_login_main></fd_login_main>
        </li>
        <li v-show="active == 'register'">
          <fd_register></fd_register>
        </li>
      </ul>
    </fd_alert>

  </div>
</template>

<script>
  import fd_alert from './alert'
  import fd_login_main from './login_main'
  import fd_register from './register'
  export default {
    name : 'login',
    data : () => {
      return {
        login_show : false,
        username : {
          username_text : '',
          username_title : 'username',
          successOff : false,
          errorOff : false
        },
        passwd : {
          passwd_text : '',
          passwd_title : 'passwd',
          successOff : false,
          errorOff : false
        },
        login_code_off : false,
        code : '',
        active : 'login'
      }
    },
    methods : {
      openLogin () {
        this.login_show = !this.login_show;
      //  this.login_show = true;
      },
      setActive (str){
        this.active = str;
      },
      cancel () {
        this.login_show = false;
      },
      finish () {
        let data = {};
        if (data && data.code == 1000) {
          this.login_show = false;
          this.$message({
            showClose : true,
            message : '登陆成功!'
          });
        } else {
          this.$message({
            showClose : true,
            message : '用户名或密码错误！',
            type : 'error'
          });
        }
      }
    },
    events : {
    },
    mounted (el){
      var _this = this;
      $(this.$el).on('keydown','.finishInput' + ' input',function(ev){
        if (ev.keyCode == 13) {
          this.finish();
        }
      }.bind(this));
    },
    components : {
      fd_alert,fd_login_main,fd_register
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--
<style scoped>

</style>
-->

<style lang="stylus" rel="stylesheet/stylus">
  @import "login.styl";
</style>

