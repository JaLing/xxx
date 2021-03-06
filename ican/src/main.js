import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.use(VueResource)
