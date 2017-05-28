<template>
    <div class="home">
        <myHeader title="首页">
            <router-link slot="left" to="/">首页</router-link>
            <router-link slot="right" to="/signout">退出</router-link>
        </myHeader>
        <div>
            {{user.name}}，欢迎回家
        </div>

        <div>
            <button type="button" v-on:click="getUsers">获得用户</button>
        </div>

        <table>
            <tr v-for="user in users">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.age}}</td>
                <td>{{user.address}}</td>
            </tr>
        </table>

    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import axios from 'axios'
  import myHeader from '../components/header.vue'

  export default {
    name: 'home',
    data () {
      return {
        users: ''
      }
    },
    created: function () {
      this.getUsers()
    },
    computed: mapState({user: state => state.user}),
    methods: {
      getUsers () {
        axios.get('/api/users').then(response => {
          this.users = response.data
        })
      }
    },
    components: {
      myHeader
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    table tr,td{
        border:1px solid;
        collapse: none;
    }
</style>
