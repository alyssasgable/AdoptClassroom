import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddRequest from '../views/AddRequest.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Schools from '../views/Schools.vue'
import Volunteers from '../views/Volunteers.vue'
import Profile from '../views/Profile.vue'

import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
   {
     path: '*',
     redirect: '/login',
   },
   {
     path: '/',
     redirect: '/login',
   },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true
   }
  },
  {
    path: '/add-request',
    name: 'add-request',
    component: AddRequest,
    meta: {
      requiresAuth: true
   }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
   path: '/sign-up',
   name: 'sign-up',
   component: SignUp
  },
  {
    path: '/schools',
    name: 'schools',
    component: Schools,
    meta: {
      requiresAuth: true
   }
  },
  {
    path: '/volunteers',
    name: 'volunteers',
    component: Volunteers,
    meta: {
      requiresAuth: true
   }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      requiresAuth: true
   }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
   const currentUser = firebase.auth().currentUser
   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

   if (requiresAuth && !currentUser) next('/login')
   else if (!requiresAuth && currentUser) next('/home')
   else next()
})

export default router
