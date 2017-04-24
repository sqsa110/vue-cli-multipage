<template>
  <div id="login">

    <fd_header>登录</fd_header>

    <div class="login">
      <div class="login_main">
        <div slot="alert_title" class="login_title_main">
          <a href="#/index" @click="setActive('login')" class="login_title_name login_title_login" :class="[ active == 'login' ? 'active' : '' ]"> 登陆 </a>
          <a href="#/register" @click="setActive('register')" class="login_title_name login_title_register" :class="[ active == 'register' ? 'active' : '' ]"> 注册 </a>
        </div>
        <div class="login_userinfo_main">
          <router-view></router-view>
        </div>
      </div>
    </div>

    <fd_footer icon_off_3="2"></fd_footer>

  </div>
</template>

<script>
  import '../../../static/js/util/fd_tools'
  import fd_header from '../../components/header/header'
  import fd_footer from '../../components/footer/footer'

  export default {
    name : 'app',
    data () {
      return {
        active : "login"
      }
    },
    methods : {
      setActive (name) {
        this._data.active = name;
      }
    },
    createds () {
      console.log(this)
      //beforeMount
    },
    created (){
      //初始化data对应页面
      var name = $.getVueRouteName();
      if (name == 'register') {
        //设置注册按钮为active
        this._data.active = 'register';
      } else {
        //默认设置登录为active
        this._data.active = 'login'
      }

    },
    components : {fd_header,fd_footer}   //components components
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "login.styl";
</style>
