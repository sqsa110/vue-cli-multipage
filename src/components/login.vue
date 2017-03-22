<template>
  <div class="login">
    <el-button @click="openLogin" >登录</el-button>
    <fd_alert title="登录" @alert_cancel="cancel" @alert_finish="finish" :showOff="login_show" :cancelOff="true" finishTitle="登录">
      <div slot="alert_title" class="login_title_main">
        <a href="javascript:;" @click="setActive('login')" class="login_title_name login_title_login" :class="[ active == 'login' ? 'active' : '' ]"> 登陆 </a>
        <a href="javascript:;" @click="setActive('register')" class="login_title_name login_title_register" :class="[ active == 'register' ? 'active' : '' ]"> 注册 </a>
      </div>
      <div class="login_box">
        <div class="login_input_main">
          <h5 class="login_main_title">用户名:</h5>
          <div class="login_input">
            <el-input v-model="username.username_text" placeholder="请输入用户名" v-bind:id="username.username_title" name="username" v-bind:autofocus="true"></el-input>
          </div>
        </div>
        <el-alert
          title="成功提示的文案"
          type="success"
          :closable="false"
          v-show="username.successOff"
          show-icon>
        </el-alert>
        <el-alert
          title="错误提示的文案"
          type="error"
          :closable="false"
          v-show="username.errorOff"
          show-icon>
        </el-alert>
      </div>
      <div class="login_box">
        <div class="login_input_main">
          <h5 class="login_main_title">密码:</h5>
          <div class="login_input">
            <el-input type="password" class="sdfsdf" v-model="passwd.passwd_text" placeholder="请输入密码" v-bind:id="passwd.passwd_title" name="passwd"></el-input>
          </div>
        </div>
        <el-alert
          title="成功提示的文案"
          type="success"
          :closable="false"
          v-show="passwd.successOff"
          show-icon>
        </el-alert>
        <el-alert
          title="错误提示的文案"
          type="error"
          :closable="false"
          v-show="passwd.errorOff"
          show-icon>
        </el-alert>
      </div>
      <div class="login_code" v-if="login_code_off">
        <h5 class="login_main_title login_code_main">
          <img class="login_code_img" src="/static/img/login/code.jpg" alt="验证码" />
        </h5>
        <div class="login_code_input login_input">
          <el-input type="text" v-model="code" placeholder="请输入验证码" id="login_code" name="login_code"></el-input>
        </div>
      </div>
    </fd_alert>

  </div>
</template>

<script>
  import fd_alert from './alert'
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
      console.log(this);
      console.log($(this.$el).find('#' + this.passwd.passwd_title));
      console.log('#' + this.passwd.passwd_title)
      console.log($(this.$el))
      /*
      $(this.el).find('#' + this.data.passwd.passwd_title + ' input').on('keydown',function(ev){
          console.log(ev)
          if (ev) {

          }
      })
      */
    },
    components : {
      fd_alert
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

