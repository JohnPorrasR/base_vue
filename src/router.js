import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Sistemas from './views/configuracion/Sistemas.vue'
import Usuarios from './views/configuracion/Usuarios.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/configuracion/sistemas',
      name: 'sistemas',
      component: Sistemas
    },
    {
      path: '/configuracion/usuarios',
      name: 'usuarios',
      component: Usuarios
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
