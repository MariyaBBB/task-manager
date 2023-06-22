import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ListView from './views/ListView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
    {
      name: 'List',
      path: '/list',
      component: ListView
    }
  ]
}
)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')



