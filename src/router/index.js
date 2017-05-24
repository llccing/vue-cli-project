import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

import store from '../store'

// import Hello from '@/components/Hello'
// import Home from '@/components/Home'
// import Login from '@/components/Login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: App,
      children: [
        {
          path: '/login',
          meta: {auth: false},
          component: resolve => require(['../components/Login'], resolve)
        }, {
          path: '/home',
          component: resolve => require(['../components/Home'], resolve)
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
  var isLogin = Boolean(store.state.user.id)
  // var isLogin = true

  if (auth && !isLogin && path !== '/login') {
    return next({path: '/login'})
  }
  next()
})

export default router
