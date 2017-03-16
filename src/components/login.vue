<template>
  <div class="login">
    <el-button @click="open5">登录</el-button>
    <fd_alert title="登录" v-if="login_show">
      <div class="login_box">
        <div class="login_input_main">
          <h5 class=" login_title">用户名:</h5>
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
          <h5 class="login_title">密码:</h5>
          <div class="login_input">
            <el-input type="password" v-model="passwd.passwd_text" placeholder="请输入密码" v-bind:id="passwd.passwd_title" name="passwd"></el-input>
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
    </fd_alert>
    <!--
    <div class="mask" v-if="login_show">

    </div>
    <div class="login_from" v-if="login_show">
      <div class="login_main">
        <div class="login_title_box">
          <h3>登录</h3>
        </div>
        <div class="login_box">
          <div class="login_input_main">
            <h5 class=" login_title">用户名:</h5>
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
            <h5 class="login_title">密码:</h5>
            <div class="login_input">
              <el-input type="password" v-model="passwd.passwd_text" placeholder="请输入密码" v-bind:id="passwd.passwd_title" name="passwd"></el-input>
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
      </div>
    </div>
    -->
    <!--  <el-button @click="visible = true">按钮</el-button>   -->
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
    },
    components : {
      fd_alert
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mask {
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    opacity:.5;
    background:#000;
  }
  .login_from {
    position : fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    text-align:center;
  }
  .login_from:after {
    content : '';
    display : inline-block;
    height:100%;
    width:0;
    vertical-align:middle;
  }
  .login_main {
    text-align:left;
    display:inline-block;
    vertical-align:middle;
    background-color:#fff;
    width:420px;
    border-radius:3px;
    font-size:16px;
    padding:0 20px 20px;
    overflow:hidden;
    -webkit-backface-visibility:hidden;
    backface-visibility:hidden;
  }
  .login_title {
    display:inline-block;
    width:15%;
    text-align:justify;
    text-justify:distribute-all-lines;
    text-align-last:justify;
  }
  .login_input {
    display:inline-block;
    width:80%;
  }

</style>
