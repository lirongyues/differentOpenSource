import Vue from 'vue'
import App from './App.vue'
import DosUI from '@'
import  '../src/components/directive/waves.js';
import '@/assets/index.scss'
Vue.use(DosUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
