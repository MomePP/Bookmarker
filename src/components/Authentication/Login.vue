<template>
  <div class="login">
    <notifications></notifications>
    <div class="col-md-6 col-md-offset-3">
      <div align="center">
        <img src="static/img/book_bookmark.png" height="256" width="256">
        <h2>Welcome to Bookmarker</h2>
      </div>
      <br>
      <hr>
    </div>
    <div class="col-md-8 col-md-offset-2">
      <!-- <div class="col-md-5 col-md-offset-4"> -->
      <div class="col-md-5 col-centered">
        <h3>Sign in</h3>
        <form @submit.prevent="validateBeforeSubmit">
          <div class="form-group" :class="{'has-error': errors.has('email') }">
            <input type="text" class="form-control" name="email" placeholder="Email" v-model="user.username" v-validate data-vv-rules="required|email">
            <span class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
          </div>
          <div class="form-group" :class="{'has-error': errors.has('password') }">
            <input type="password" class="form-control" name="password" placeholder="Password" v-model="user.password" v-validate data-vv-rules="required">
            <span class="text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</span>
          </div>
          <button class="btn btn-secondary" type="submit">Login</button>
        </form>
        <p>You don't have an account? You can
          <router-link to="./signup"> create one</router-link>
          <br> Or... You can
          <router-link to="./signup"> create account here</router-link>
        </p>
      </div>
      <!-- <div class="col-md-3">
        <h3 class="col-md-offset-3">Or</h3>
        <div style="margin-top: -20px" id="firebaseui-auth-container" v-on:click="firebaseUILogin"></div>
      </div> -->
    </div>

    <!-- <p>Sign-in with
        <a @click="loginGoogle">Google</a> or
        <a @click="loginFacebook">Facebook</a> account.</p>
      <p>Sign-in with Firebase UI
        <router-link to='/firebaseauth'>click here</router-link>
      </p> -->


  </div>

</template>

<script>
  import { firebaseDB } from 'src/firebaseConfig'
  import firebase from 'firebase'
  import PaperNotification from 'src/components/UIComponents/NotificationPlugin/Notification.vue'
  import Auth from 'src/services/auth'

  export default {
    name: 'login',
    components: {
      PaperNotification
    },
    data () {
      return {
        user: {
          username: '',
          password: ''
        },
        notifications: {
          topCenter: false
        }
      }
    },
    methods: {
      login () {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.user.username, this.user.password)
          .then(
            user => {
              this.notifyVue('success', 'Authentication Success', 'Welcome to bookmarker')
              this.getUserKey().then(key => {
                var redirectPath = key + '/bookmark'
                Auth.login(redirectPath)
              })
            },
            err => {
              if (err.code === 'auth/wrong-password') {
                this.notifyVue('danger', 'Authentication Error', 'Wrong password, please try again')
              } else if (err.code === 'auth/user-not-found') {
                this.notifyVue('danger', 'Authentication Error', 'Username not found !')
              } else if (err.code === 'auth/invalid-email') {
                this.notifyVue('danger', 'Authentication Error', 'Invalid email')
              } else {
                this.notifyVue('danger', 'Authentication Error', 'Oops. ' + err.message)
              }
            }
          )
          .catch(error => {
            if (error.code === 'auth/wrong-password') {
              this.notifyVue('danger', 'Authentication Error', 'Wrong password, please try again')
            } else {
              this.notifyVue('danger', 'Authentication Error', error.message)
            }
          })
      },
      notifyVue (typeInput, titleInput, messageInput) {
        this.$notifications.notify({
          message: '<b>' + titleInput + '</b><br>' + messageInput,
          icon: 'ti-gift',
          horizontalAlign: 'right',
          verticalAlign: 'top',
          type: typeInput
        })
      },
      validateBeforeSubmit (e) {
        this.$validator.validateAll()
        if (!this.errors.any()) {
          this.login()
        }
      },
      getUserKey () {
        return new Promise((resolve, reject) => {
          var users = firebaseDB.ref('users/')
          users.orderByChild('email').equalTo(this.user.username).on('child_added', function (data, err) {
            if (err) {
              reject(new Error('failed to receive data'))
            } else {
              resolve(data.key)
            }
          })
        })
      }
    }
  }

</script>

<style src="firebaseui/dist/firebaseui.css" />
<style scoped>
  .login {
    margin-top: 40px;
  }

  .col-centered{
    float: none;
    margin: 0 auto;
  }

  input {
    margin-top: 10px;
    width: 100%;
    padding: 15px;
  }

  input, textarea{
    background-color:#bfbfbf;
  }

  p {
    margin-top: 40px;
    font-size: 13px;
  }

  p a {
    text-decoration: underline;
    cursor: pointer;
  }

</style>
