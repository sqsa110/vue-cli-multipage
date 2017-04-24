<template>
  <fd_login_main @login_finish="login_finish" :loading="loading" ></fd_login_main>
</template>

<script>
  import fd_login_main from '../../../components/login_main'
  import '../../../../static/js/lib/jQuery.md5';
  export default {
    name : 'login',
    data : () => {
      return {
        loading : false
      }
    },
    methods : {
      login_finish (data) {
        this.loading = true;
        setTimeout(function(){
          if (data.username.success && data.passwd.success && data.code.success) {
            alert('登录成功！');
          } else {
            this.show_warn_message('有内容输入不正确,请检查!');
          }
          this.loading = false;
        }.bind(this),300);
      },
      show_warn_message (text){
        this.$message({
          showClose: true,
          message: text,
          type: 'warning'
        });
      }
    },
    events : {
    },
    mounted (el){

    },
    components : {
      fd_login_main
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--
<style scoped>

</style>


<style lang="stylus" rel="stylesheet/stylus">
  @import "login.styl";
</style>
-->
