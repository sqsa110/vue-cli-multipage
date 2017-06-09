<template>
  <div>
    <h1>index_0</h1>
    <div>
      <input type="text" v-model="message" placeholder="username">
      <div>{{message}}</div>
      <div>{{getUserName}}</div>
      <div>{{$store.state.app.user_name}}</div>
      <div>
        <button type="button" @click="submit">提交</button>
        <button type="button" @click="submitInit">初始化</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'index_0',
    data: () => {
      return {

      }
    },
    computed: {
      ...mapGetters({
        getUserName: 'getUserName'
      }),
      message: {
        get(){
          return this.getUserName;
        },
        set(value){
          this.$store.dispatch('changeUserName',value);
        }
      }
    },
    methods: {
      submit(){
        console.log(this.getUserName);
      },
      submitInit(){
        this.username = '';
        this.$store.dispatch('userNameInitState');
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "index_0.styl"
</style>
