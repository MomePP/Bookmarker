import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// LoginViews
import Login from 'src/components/Authentication/Login.vue'
import Signup from 'src/components/Authentication/Signup.vue'
// Admin pages
import UserProfile from 'src/components/Dashboard/Views/BookmarkProfile.vue'
import About from 'src/components/Dashboard/Views/About.vue'
import Bookmarker from 'src/components/Dashboard/Views/Bookmarker.vue'

const routes = [
  {
    path: '/',
    component: Login,
    redirect: './login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/:admin',
    component: DashboardLayout,
    redirect: '/:admin/bookmark',
    meta: { requiresAuth: true },
    children: [
      {
        path: 'stats',
        name: 'User Profile',
        component: UserProfile
      },
      {
        path: 'about',
        name: 'about',
        component: About
      },
      {
        path: 'bookmark',
        name: 'bookmark',
        component: Bookmarker
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
