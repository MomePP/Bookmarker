/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import vClickOutside from 'v-click-outside'

// Plugins
import GlobalComponents from './globalComponents'
import Notifications from './components/UIComponents/NotificationPlugin'
import SideBar from './components/UIComponents/SidebarPlugin'
import App from './App'

// router setup
import routes from './routes/routes'

// library imports
import Chartist from 'chartist'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/sass/paper-dashboard.scss'
import 'es6-promise/auto'

// VueResource -- http methods
import VueResource from 'vue-resource'

// firebase
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import {firebaseApp, db} from './firebaseConfig'

import VeeValidate from 'vee-validate'

// authentication service
import Auth from './services/auth.js';

// plugin setup
Vue.use(VueRouter)
Vue.use(GlobalComponents)
Vue.use(vClickOutside)
Vue.use(Notifications)
Vue.use(SideBar)
Vue.use(VueResource)
Vue.use(VeeValidate)

// configure router
export const router = new VueRouter({
    routes, // short for routes: routes
    linkActiveClass: 'active',
    // mode: 'history'
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!Auth.authenticated) {
            next({
                path: './login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
})

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
    get() {
        return this.$root.Chartist
    }
})

export const firebaseUI = new firebaseui.auth.AuthUI(firebase.auth())
export const userLoginParse = new Vue();

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    data: {
        Chartist: Chartist
    }
})
