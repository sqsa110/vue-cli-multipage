<template>
  <div>
    <div class="login_box">
      <div class="login_input_main">
        <div class="login_input">
          <el-input v-model="username.username_text" placeholder="请输入用户名" v-bind:id="username.username_title" name="username" v-bind:autofocus="true"></el-input>
          <div class="username_icon login_icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yonghu"></use>
            </svg>
          </div>
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
        <div class="login_input finishInput">
          <el-input type="password" class="sdfsdf" v-model="passwd.passwd_text" placeholder="请输入密码" v-bind:id="passwd.passwd_title" name="passwd"></el-input>
          <div class="password_icon login_icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-suo"></use>
            </svg>
          </div>
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
      <div class="login_code_input finishInput login_input">
        <el-input type="text" v-model="code" placeholder="请输入验证码" id="login_code" name="login_code"></el-input>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name : 'login_main',
    data () {
      return {
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
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "login_main.styl";
</style>

