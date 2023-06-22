import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ListView from './views/ListView.vue'
import MainView from './views/MainView.vue'

Vue.use(VueRouter);

export const routes = [
  {
    name: 'List',
    path: '/list',
    component: ListView
  },
  {
    name: 'Main',
    path: '/',
    component: MainView
  }
]

export const router = new VueRouter({
    mode: 'history',
    routes: routes
}
)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')



