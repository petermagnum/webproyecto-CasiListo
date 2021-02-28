import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Inicio.vue')
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Inicio.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/postulacion',
    name: 'Postulacion',
    component: () => import(/* webpackChunkName: "postulacion" */ '../views/Postulacion.vue')
  },
  {
    path: '/cotizacion',
    name: 'Cotizacion',
    component: () => import(/* webpackChunkName: "cotizacion" */ '../views/Cotizacion.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Contacto.vue')
  },
 
  {
    path: '/bakend-postulaciones',
    name: 'Bakend-postulaciones',
    component: () => import(/* webpackChunkName: "about" */ '../views/Bakend-postulaciones.vue')
  },
  {
    path: '/info-postulaciones/:rut',
    name: 'Info-postulaciones',
    component: () => import(/* webpackChunkName: "about" */ '../views/Info-postulaciones.vue')
  },
  {
    path: '/bakend-cotizaciones',
    name: 'Bakend-cotizaciones',
    component: () => import(/* webpackChunkName: "about" */ '../views/Bakend-cotizaciones.vue')
  },
  {
    path: '/info-cotizaciones/:id',
    name: 'Info-cotizaciones',
    component: () => import(/* webpackChunkName: "about" */ '../views/Info-cotizaciones.vue')
  },
  {
    path: '/bakend-contacto',
    name: 'Bakend-contacto',
    component: () => import(/* webpackChunkName: "about" */ '../views/Bakend-contacto.vue')
  },
  {
    path: '/info-contacto/:id',
    name: 'Info-contacto',
    component: () => import(/* webpackChunkName: "about" */ '../views/Info-contacto.vue')
  },
  {
    path: '/loginBakend',
    name: 'LoginBakend',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginBakend.vue')
  },
  {
    path: '/bakend-home',
    name: 'Bakend-home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Bakend-home.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
