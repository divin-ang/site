import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Textra from 'vue-textra'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.config.productionTip = true
Vue.use(Textra);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
