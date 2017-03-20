<template>
  <div>
    <transition name="fade">
      <div class="fd_alert" v-if="showOff">
        <div class="alert_mask" @click="cancelAction(false)">
        </div>
        <div class="alert_from" @click="cancelAction(false)">
          <div class="alert_main">
            <div class="alert_title_box el-message-box__header">
              <slot name="alert_title">
                <div class="el-message-box__title"> {{ title }} </div>
                <i class="alert_icon_close el-message-box__close el-icon-close" @click=""></i>
              </slot>
            </div>
            <div class="alert_box">
              <slot>
                <p>这里是默认文本</p>
              </slot>
            </div>
            <div class="el-message-box__btns" v-show="btnsOff">
              <slot name="alert_btns">
                <el-button v-if="cancelOff" @click="cancelAction(false)">{{ cancelTitle }}</el-button>
                <el-button v-if="finishOff" type="primary" :class="[cancelOff ? '' : 'block_btn']" @click="finishAction" :loading="loadingOff">{{ finishTitle }}</el-button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name : 'login',
    props : {
      title : {
        type : String,
        default : '这里是标题'
      },
      cancelOff : {
        type : Boolean,
        default : false
      },
      cancelTitle : {
        type : String,
        default : '取消'
      },
      finishOff : {
        type : Boolean,
        default : true
      },
      finishTitle : {
        type : String,
        default : '确认'
      },
      finish : {
        type : Object,

      },
      btnsOff : {
        type : Boolean,
        default : true
      },
      maskClickOff : {
        type : Boolean,
        default : true,
      },
      showOff : {
        type : Boolean,
        default : false
      }
    },
    data : () => {
      return {
        loadingOff : false,
      }
    },
    methods : {
      cancelAction (){
        this.$emit('alert_cancel',false);
      },
      finishAction (){
        this.$emit('alert_finish',false);
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "alert.styl"
</style>
<!--
<style scoped>
  .alert_mask {
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    opacity:.5;
    background:#000;
  }
  .alert_from {
    position : fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    text-align:center;
  }
  .alert_from:after {
    content : '';
    display : inline-block;
    height:100%;
    width:0;
    vertical-align:middle;
  }
  .alert_main {
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
    border-radius:10px;
  }
  .alert_box {
    padding:20px 20px 0;
  }

</style>
-->
