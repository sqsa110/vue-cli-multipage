<template>
  <div id="login">

    <fd_header></fd_header>
    <fd_login></fd_login>
    <fd_footer></fd_footer>

  </div>
</template>

<script>
  // <script src="/static/font/iconfont.js">
  import fd_login from '../../components/login';
  import fd_header from '../../components/header/header';
  import fd_footer from '../../components/footer/footer';

  export default {
    name : 'login',
    data () {
      return {
      }
    },
    components : {fd_login,fd_header,fd_footer}   //components components
  }
</script>

<style>

</style>
