<template>
  <div class="sign-up" align="center">
    <notifications></notifications>
    <img src="../../../static/img/book_bookmark.png" height="256" width="256">
    <hr>
    <h3>Let's create a new account!</h3>
    <form @submit.prevent="validateBeforeSubmit">
      <div class="form-group" :class="{'has-error': errors.has('fullName') }">
        <input type="text" ref="name" class="form-control" name="fullName" placeholder="Full Name" v-model="user.name" v-validate data-vv-rules="required|min:3">
        <span class="text-danger" v-if="errors.has('fullName')">{{ errors.first('fullName') }}</span>
      </div>
      <div class="form-group" :class="{'has-error': errors.has('email') }">
        <input type="text" ref="email" class="form-control" name="email" placeholder="Email" v-model="user.email" v-validate data-vv-rules="required|email">
        <span class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
      </div>
      <div class="form-group" :class="{'has-error': errors.has('password') }">
        <input type="password" ref="password" class="form-control" name="password" placeholder="Password" v-model="user.password1" v-validate data-vv-rules="required|alpha_num">
        <span class="text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</span>
      </div>
      <div class="form-group" :class="{'has-error': errors.has('password2') }">
        <input type="password" ref="password2" class="form-control" name="password2" placeholder="Confirm password" v-model="user.password2" v-validate data-vv-rules="required|confirmed:password" data-vv-as="password">
        <span class="text-danger" v-if="errors.has('password2')">{{ errors.first('password2') }}</span>
      </div>
      <div class="form-group" :class="{'has-error': errors.has('facebook url') }">
        <input type="text" ref="url" class="form-control" name="facebook url" placeholder="Facebook URL" v-model="user.url" v-validate data-vv-rules="required|url">
        <span class="text-danger" v-if="errors.has('facebook url')">{{ errors.first('facebook url') }}</span>
      </div>
      <div class="form-group" :class="{'has-error': errors.has('phone') }">
        <input type="text" ref="phone" class="form-control" name="phone" placeholder="Phone Number" v-model="user.phone" v-validate data-vv-rules="required">
        <span class="text-danger" v-if="errors.has('phone')">{{ errors.first('phone') }}</span>
      </div>
      <div class="form-group" :class="{'has-error': errors.has('birthdate') }">
        <input type="text" onfocus="(this.type='date')" ref="birthdate" class="form-control" name="birthdate" placeholder="Birth Date" v-model="user.birthdate" v-validate data-vv-rules="required">
        <span class="text-danger" v-if="errors.has('birthdate')">{{ errors.first('birthdate') }}</span>
      </div>
      <button class="btn btn-secondary" type="submit">Signup</button>
    </form>
    <h5>or go back to
      <router-link to="./login">login</router-link>.</h5>
  </div>

</template>

<script>
  import firebase from 'firebase'
  import { firebaseDB } from '../../firebaseConfig'
  import PaperNotification from 'src/components/UIComponents/NotificationPlugin/Notification.vue'

  var md5 = require('md5')
  firebaseDB.ref('users')

  export default {
    name: 'signup',
    components: {
      PaperNotification
    },
    data () {
      return {
        user: {
          name: '',
          email: '',
          password1: '',
          password2: '',
          url: '',
          phone: '',
          birthdate: ''
        }
      }
    },
    methods: {
      validateBeforeSubmit (e) {
        this.$validator.validateAll()
        if (!this.errors.any()) {
          this.signup()
        }
      },
      signup () {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.user.email, this.user.password1)
          .then(
            user => {
              this.notifyVue('success', 'Signup Successfully', 'Your account has been created!')

              /* add user info to database */
              this.addUserInfo()

              this.$router.push({
                name: 'login'
              })
            },
            error => {
              var errorCode = error.code
              var errorMsg = error.message
              if (errorCode === 'auth/weak-password') {
                this.notifyVue('warning', 'Password Warning', 'The password is too weak')
              } else {
                this.notifyVue('danger', 'Signup Failed', 'Oop..' + errorMsg)
              }
            }
          )
      },
      addUserInfo () {
        var newUser = {
          fullName: this.user.name,
          email: this.user.email,
          phone: this.user.phone,
          facebookUrl: this.user.url,
          birthdate: this.user.birthdate
        }

        var uid = md5(this.user.email)
        // console.log(uid)
        firebaseDB.ref('users/' + uid).set(newUser)
      },
      notifyVue (typeInput, titleInput, messageInput) {
        this.$notifications.notify({
          message: '<b>' + titleInput + '</b><br>' + messageInput,
          icon: 'ti-gift',
          horizontalAlign: 'right',
          verticalAlign: 'top',
          type: typeInput
        })
      }
    }
  }

</script>

<style scoped>
  .sign-up {
    margin-top: 40px;
  }

  input {
    margin: 5px 0;
    width: 40%;
    padding: 15px;
  }

  input, textarea{
    background-color:#bfbfbf;
  }

  button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }

</style>
