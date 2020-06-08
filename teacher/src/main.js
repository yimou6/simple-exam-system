import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import httpHelper from './axios'
Vue.config.productionTip = false

Vue.prototype.config = require('../project.config.json')
Vue.prototype.http = httpHelper

Vue.directive('loading', function (el, binding) {
  if (binding.value) {
    el.className += ' e-loading'
  } else {
    el.className = el.className.replace(' e-loading', '')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
