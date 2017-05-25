<template>
    <div class="login">
        <v-header title="登录">
            <v-router slot="left" to="/">返回</v-router>
        </v-header>

        <form class="form-inline" v-on:submit.prevent="submit">
            <div class="form-group">
                <div v-if="btn && !form.name">id不能为空</div>
                <label for="exampleInputName2">Name</label>
                <input type="text" class="form-control" id="exampleInputName2" v-model="form.name" placeholder="name">
            </div>
            <div class="form-group">
                <div v-if="btn && !form.pass">pass不能为空</div>

                <label for="exampleInputEmail2">Email</label>
                <input type="password" class="form-control" id="exampleInputEmail2" v-model="form.pass"
                       placeholder="pass">
            </div>
            <button type="submit" class="btn btn-default">登录</button>
        </form>

        <div>
            <router-link to="/"><h2>Index</h2></router-link>
        </div>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {USER_SIGNIN} from '../store/user'

  export default {
    name: 'login',
    data () {
      return {
        btn: false,
        form: {
          name: '',
          pass: ''
        }
      }
    },
    methods: {
      ...mapActions([USER_SIGNIN]),
      submit () {
        this.btn = true
        if (!this.form.name || !this.form.pass) return
        this.USER_SIGNIN(this.form)
        this.$router.replace({path: '/home'})
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
