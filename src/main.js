import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import store from './store/index.js'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

Vue.config.productionTip = false

Vue.use(VueRouter);


library.add(faUserSecret, faShoppingCart)

Vue.component('font-awesome-icon', FontAwesomeIcon)

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
