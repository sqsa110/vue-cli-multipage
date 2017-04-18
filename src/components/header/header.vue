<template>
  <div id="fd_header">
    <slot name="goback">
      <div class="goback">
        <a @click="goback" href="javascript:history.back();">
          <slot name="goback_icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fanhui"></use>
            </svg>
          </slot>
        </a>
      </div>
    </slot>
    <slot name="title">
      <h2 class="header_title">{{ title }}</h2>
    </slot>
    <slot name="gohome">
      <div class="gohome">
        <a @click="gohome" :href="homeurl">
          <slot name="gohome_icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shouye1"></use>
            </svg>
          </slot>
        </a>
      </div>
    </slot>
  </div>
</template>

<script>
  import '../../../static/font/iconfont.js'
  export default {
    name : 'login',
    props : {
      title : {
        type : String,
        default : '这里是标题'
      },
      homeurl : {
        type : String,
        default : './index.html'
      }
    },
    data : () => {
      return {
      }
    },
    methods : {
      goback (){
        this.$emit('goback',false);
        history.back();
      },
      gohome (){
        this.$emit('gohome',false);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "header.styl"
</style>
