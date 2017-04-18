<template>
  <div id="fd_footer">
    <slot>
      <ul>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fanhui"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fanhui"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fanhui"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fanhui"></use>
          </svg>
        </li>
      </ul>
    </slot>
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
      homeurl : {
        type : String,
        default : './index.html'
      }
    },
    data : () => {
      return {
        backImg : "/static/img/main/back.png",
        homeeImg : "/static/img/main/home.png"
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
  @import "footer.styl"
</style>
