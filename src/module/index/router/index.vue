<template>
  <div>
    <h1>index1</h1>
    <span>{{getUserName}}</span>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'index1',
    data: () => {
      return {

      }
    },
    computed: {
      ...mapGetters({
        getUserName: 'getUserName'
      })
    }
  }

</script>

<!--
<style lang="stylus" rel="stylesheet/stylus">
  @import 'index.styl'
</style>
-->

