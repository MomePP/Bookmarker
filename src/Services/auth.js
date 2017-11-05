import { router } from 'src/main'

export default {

  // authentication status
  authenticated: false,

  // Send a request to the login URL and save the returned JWT
  login (redirect) {
    this.authenticated = true
    // Redirect to a specified route
    router.push({
      path: redirect
    })
  },

  // To log out
  logout: function () {
    this.authenticated = false
    router.push({
      name: 'login'
    })
  }
}
