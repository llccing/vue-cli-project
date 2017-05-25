<template>
    <div>
        <v-header title="首页">
            <router-link slot="right" v-if="user.name" to="/home">{{user.name}}</router-link>
        </v-header>
        <div class="login-msg" v-if="!user.mame">
            <router-link to="/login">您还未登录，请先登录</router-link>
        </div>
        <div class="msg" v-if="user.name">
            <img v-bind="logo" alt=""><br>
            登录成功，vue2开始了
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import logo from '../images/logo.png'
  export default {
    data () {
      return {
        logo
      }
    },
    computed: mapState({user: state => state.user})
  }
</script>

<style scoped>
    .login-msg {
        padding: 50px;
        text-align: center;
    }

    .msg {
        padding: 50px;
        text-align: center;
        font-size: 20px;
        color: #f00;
    }
</style>
