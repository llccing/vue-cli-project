<template>
        <router-view></router-view>
</template>

<script>
  export default {
    name: 'app',
    created () {
      this.checkLogin()
    },
    methods: {
      checkLogin () {
//        console.log(this)
      }
    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
