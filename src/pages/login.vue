<template>
    <div class="bg-lg">
        <div class="login-bg">
            <div class="login-box">
                <p id="error"><img src="../images/login-3.png" alt="错误"><span id="errorMsg">用户名密码错误！</span></p>

                <div class="name-warpper">
                    <img class="img-left" src="../images/user.png" alt="用户名">
                    <input type="text" class="name" v-model="form.name" placeholder="账号" autocomplete="off">
                    <img id="nameDel" class="img-right" src="../images/top-nav-close.png"/>
                </div>
                <div class="pwd-wrapper">
                    <img class="img-left" src="../images/pwd.png" alt="密码">
                    <input type="password" class="pass" v-model="form.pass" placeholder="密码" autocomplete="off">
                    <img id="pwdDel" class="img-right" src="../images/top-nav-close.png"/>
                </div>
                <button type="button" v-on:click="submit">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {USER_SIGNIN} from '../store/user'
  import axios from 'axios'
  import api from '../store/api'

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
        axios.get(api.login).then(response => {
          debugger
          if (response.data.status === 'yes' && response.data.code === 200) {
            this.USER_SIGNIN(this.form)
            this.$router.replace({path: '/'})
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


    .bg-lg {
        position: relative;
        width: 100%;
        height: 100%;
        background: url('../images/login-21.png') 50% no-repeat;
        background-size: cover;
    }

    .login-bg {
        background: url('../images/login-22.png') 50% no-repeat;
        width: 800px;
        height: 440px;
        padding-top: 0;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
    }

    .login-box {
        padding: 110px 226px 130px 226px;
    }

    input {
        cursor: pointer;
    }

    .name-warpper,
    .pwd-wrapper {
        position: relative;
        background: #fff;
        font-size: 12px;
        border-radius: 4px;
        line-height: 50px;
        margin-bottom: 24px;
        margin-top: 4px;
    }

    .name-warpper img.img-left,
    .pwd-wrapper img.img-left {
        vertical-align: sub;
        margin: 0 10px 0 12px;
    }

    .name-warpper img.img-right,
    .pwd-wrapper img.img-right {
        display: none;
        position: absolute;
        right: 0;
        top: 12px;
        cursor: pointer;
        padding: 10px;
        margin: 0;
    }

    .name,
    .pass {
        padding: 5px 0;
        border: none;
        line-height: 40px;
        font-size: 18px;
        outline: 0;
        width: 300px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;;
    }

    .name:-webkit-autofill,
    .pass:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
    }

    button {
        display: block;
        border: none;
        border-radius: 2px;
        background: #1166B7;
        color: #fff;
        font-size: .2rem;
        font-weight: 700;
        cursor: pointer;
        width: 348px;
        height: 50px;
    }

    #error {
        display: none;
        font-size: .16rem;
        color: red;
        position: absolute;
        background: #fff;
        top: 68px;
        border: 1px solid #5daef7;
        width: 349px;
        padding: 2px;
        box-sizing: border-box;
        border-radius: 4px;
        line-height: 14px;
    }

    #error img {
        vertical-align: bottom;
        margin-left: 12px;
    }

    #errorMsg {
        font-size: 13px;
        margin-left: 12px;
    }
</style>
