// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import './assets/css/index.css'
import './assets/css/login.css'
import './assets/css/product-card.css'
import './assets/css/product.css'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'

Vue.config.productionTip = false

sync(store, router)

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
