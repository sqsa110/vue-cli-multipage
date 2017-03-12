<template>
  <div class="login">
      <el-button @click="open5">登录</el-button>
      <div class="login_from" v-if="login_show">
          <div class=".username_box" for="username">
              <h5 class="username_title">用户名:</h5>
              <el-input v-model="username_text" placeholder="请输入用户名" v-bind:id="username_title" name="username" v-bind:autofocus="true"></el-input>
          </div>
          <div class="passwd_box" for="passwd">
              <h5 class="username_title">密码:</h5>
              <el-input type="password" v-model="passwd_text" placeholder="请输入密码" v-bind:id="passwd_title" name="passwd"></el-input>
          </div>
      </div>
    <!--  <el-button @click="visible = true">按钮</el-button>   -->
  </div>
</template>

<script>
  export default {
      name : 'login',
      data : () => {
          return {
              login_show : false,
              username_text : '',
              username_title : 'username',
              passwd_text : '',
              passwd_title : 'passwd',
          }
      },
      methods : {
          open4 () {
              this.$msgbox({
                  title : '登陆',
                  message : '登陆',
                  showCancelButton : true,
                  confirmButtonText : '登陆',
                  cancelButtonText : '取消',
                  beforeClose : (action, instance, done) => {
                      if (action === 'confirm') {
                          instance.confirmButtonLoading = true;
                          instance.confirmButtonText = '执行中...';
                          setTimeout(() => {
                              done();
                              setTimeout(() => {
                                  instance.confirmButtonLoading = false;
                              },300)
                          },3000)
                      } else {
                          done();
                      }
                  }
              }).then(action => {
                  this.$message({
                      type : 'info',
                      message : 'action: ' + action
                  })
              })
          },
          open5 () {
              this.login_show = !this.login_show;
          },
          open3 () {
              this.$prompt('请输入邮箱','提示',{
                  confirmButtonText : '确定',
                  cancelButtonText : '取消',
                  //  inputPattern : /[]/,
                  inputErrorMessage : '邮箱格式不正确',
              }).then(({ value }) => {
                  this.$message({
                      type : 'success',
                      message : '你的邮箱是： ' + value
                  });
              }).catch(() => {
                  this.$message({
                      type : 'info',
                      message : '取消输入'
                  });
              });
          }
      }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
