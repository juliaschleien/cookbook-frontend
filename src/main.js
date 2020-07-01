import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import About from './components/About.vue'
import Home from './components/Home.vue'
import Save from './components/Save.vue'
import Vuesax from 'vuesax'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/save',
      component: Save
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(Vuesax, {
})
