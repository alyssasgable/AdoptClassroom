import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Signup'
import ForgotPassword from '@/components/ForgotPassword'
import Home2 from '@/components/Home2'
import Home from '@/components/Home'
import AddRequest from '@/components/AddRequest'
import Profile from '@/components/Profile'
import Requests from '@/components/Sections/Request'


import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
        {
            path: "/",
            component: Home2,
            name: "/"
        },
        {
            path: "/welcome",
            name: "Welcome",
            component: Home2
        },
        {
            path: "/requests",
            name: "Requests",
            component: Requests,
            meta: {
              requiresAuth: true
            }
        },
        {
           path: '/add-request',
           name: 'AddRequest',
           component: AddRequest,
           meta: {
             requiresAuth: true
           }
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
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
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})

router.beforeEach((to, from, next) => {
   const currentUser = firebase.auth().currentUser
   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

   if (requiresAuth && !currentUser) next('/login')
   else if (!requiresAuth && currentUser) next('/requests')
   else next()
})

export default router
