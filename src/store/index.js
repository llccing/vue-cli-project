import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import users from './userlist'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 非生产环境，使用严格模式
  modules: {
    user,
    users
  }
})
