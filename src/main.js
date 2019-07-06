import Vue from 'vue'
import App from './App.vue'
import router from 'router/index.js'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import 'assets/stylus/index.styl'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')