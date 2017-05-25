<template>
    <div class="home">
        <v-header title="首页">
            <router-link slot="left" to="/">首页</router-link>
            <router-link slot="right" to="/signout">退出</router-link>
        </v-header>
        <div>
            {{user.name}}，欢迎回家
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'home',
    computed: mapState({user: state => state.user})
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
