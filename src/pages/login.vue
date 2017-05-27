<template>
    <div class="login">
        <header title="登录">
            <router-link slot="left" to="/">返回</router-link>
        </header>

        <el-form class="form-inline" label-width="100px">
            <el-form-item label="姓名">
                <el-input v-model="form.name" placeholder="输入姓名"></el-input>
                <div v-if="btn && !form.name">id不能为空</div>
            </el-form-item>

            <el-form-item label="密码">
                <el-input v-model="form.pass" placeholder="输入密码"></el-input>
                <div v-if="btn && !form.pass">pass不能为空</div>
            </el-form-item>

            <el-button type="primary" @click="submit">登录</el-button>
        </el-form>
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
