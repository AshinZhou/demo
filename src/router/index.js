import Vue from 'vue'
import VueRouter from 'vue-router'
import lanhu_gerensai from '../views/lanhu_gerensai/index.vue'
import lanhu_zuopinzhanshi from '../views/lanhu_zuopinzhanshi/index.vue'
import lanhu_zhanduisai from '../views/lanhu_zhanduisai/index.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    redirect: "/lanhu_gerensai"
  },
  {
    path: '/lanhu_gerensai',
    name: 'lanhu_gerensai',
    component: lanhu_gerensai
  },
  {
    path: '/lanhu_zuopinzhanshi',
    name: 'lanhu_zuopinzhanshi',
    component: lanhu_zuopinzhanshi
  },
  {
    path: '/lanhu_zhanduisai',
    name: 'lanhu_zhanduisai',
    component: lanhu_zhanduisai
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
