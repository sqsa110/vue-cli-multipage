<template>
  <div>
    <fd_header></fd_header>
    <fd_footer icon_off_1="2"></fd_footer>
  </div>
</template>

<script>

  import fd_header from '../../components/header/header'
  import fd_footer from '../../components/footer/footer'

  export default {
    name: 'app',
    data () {
      return {
      }
    },
    components : {fd_header,fd_footer}
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'index.styl'
</style>


