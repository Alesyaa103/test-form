import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import store from './store'

Vue.use(Vuelidate)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')