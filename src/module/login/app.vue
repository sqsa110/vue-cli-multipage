<template>
  <div id="login">
  <!--  <el-button @click="visible = true">按钮</el-button>   -->
    <login></login>
  </div>
</template>
<script>
  import login from '../../components/login';
  export default {
    data () {
      return {
        visible:false
      }
    },
    components : {login}   //components
  }
</script>
<style>

</style>
