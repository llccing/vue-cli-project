// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Element from 'element-ui'
import {ClientTable} from 'vue-tables-2'
import 'element-ui/lib/theme-default/index.css'
import './assets/bootstrap/css/bootstrap.css'
import './assets/font-awesome/css/font-awesome.min.css'
import './css/common.css'

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(ClientTable)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
