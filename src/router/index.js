import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '/login',
          meta: {auth: false},
          component: resolve => require(['../pages/login'], resolve)
        }, {
          path: '/signout',
          component: resolve => require(['../pages/signout'], resolve)
        }, {
          path: '/home',
          component: resolve => require(['../pages/home'], resolve)
        }, {
          path: '/',
          meta: {auth: false},
          component: resolve => require(['../pages/index'], resolve)
        }, {
          path: '*', // 其他页面强制跳转登录页
          redirect: '/login'
        }
      ]
    }
  ]
})

router.beforeEach(({meta, path}, form, next) => {
  var {auth = true} = meta
  var isLogin = Boolean(store.state.user.name)
  // var isLogin = true

  if (auth && !isLogin && path !== '/login') {
    return next({path: '/login'})
  }
  next()
})

export default router
