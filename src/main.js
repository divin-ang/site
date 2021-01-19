import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Textra from 'vue-textra'

Vue.config.productionTip = true
Vue.use(Textra);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
