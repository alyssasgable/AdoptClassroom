import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Signup'
import ForgotPassword from '@/components/ForgotPassword'
import Home2 from '@/components/Home2'
import Home from '@/components/Home'

import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
        {
            path: "/",
            component: Home2
        },
        {
            path: "/welcome",
            name: "Welcome",
            component: Home2
        },
        {
            path: "/home",
            name: "Home",
            component: Home,
            meta: {
              requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/forgot-password',
            name: 'ForgotPassword',
            component: ForgotPassword
        }
    ]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
   const currentUser = firebase.auth().currentUser
   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

   if (requiresAuth && !currentUser) next('/welcome')
   else if (!requiresAuth && currentUser) next('/home')
   else next()
})

export default router
