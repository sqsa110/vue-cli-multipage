<template>
  <div>
    <div class="header">header</div>
    <div class="route">
      <ul>
        <li>router</li>
        <li><router-view></router-view></li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data () {
      return {
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'index.styl'
</style>
