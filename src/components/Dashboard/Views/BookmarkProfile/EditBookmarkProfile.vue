<template>
  <div class="card">
    <div class="header">
      <h4 class="title">Edit Profile</h4>
    </div>
    <div class="content">
      <form>
        <div class="row">
          <div class="col-md-7">
            <fg-input type="email" label="Email (Username)" :disabled="true" placeholder="@email" v-model="fetchUser.email">
            </fg-input>
          </div>
          <div class="col-md-5">

            <fg-input type="text" label="Phone number" placeholder="phone" v-model="fetchUser.phone">
            </fg-input>
          </div>
          <!-- <div class="col-md-4">
            <fg-input type="email"
                      label="Username"
                      placeholder="Email"
                      v-model="user.email">
            </fg-input>
          </div> -->
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input type="text" label="Full Name" placeholder="First Name" v-model="fetchUser.fullName">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="date" label="Birthdate" placeholder="Birthdate" v-model="fetchUser.birthdate">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <fg-input type="text" label="Facebook" placeholder="Facebook URL" v-model="fetchUser.facebookUrl">
            </fg-input>
          </div>
        </div>

        <!-- <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="City"
                      placeholder="City"
                      v-model="user.city">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="Country"
                      placeholder="Country"
                      v-model="user.country">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="number"
                      label="Postal Code"
                      placeholder="ZIP Code"
                      v-model="user.postalCode">
            </fg-input>
          </div>
        </div> -->

        <!-- <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>About Me</label>
              <textarea rows="5" class="form-control border-input"
                        placeholder="Here can be your description"
                        v-model="user.aboutMe">

              </textarea>
            </div>
          </div>
        </div> -->
        <div class="text-center">
          <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="updateProfile">
            Update Profile
          </button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        userID: '',
        fetchUser: []
      }
    },
    methods: {
      updateProfile () {
        // alert('Your data: ' + JSON.stringify(this.fetchUser))
        this.$http.patch('https://mome-app.firebaseio.com/users/' + this.userID + '.json', this.fetchUser).then(response => {
          // define how to deal with the response
          this.notifyVue('success', 'Update Profile Successfully', 'Your profile has been updated')
          this.fetchData()
          // this.clearInput()
        },
        error => {
          // define how to deal with error
          this.notifyVue('danger', 'Unfortunately', 'Failed to update your profile')
          console.log(error)
        })
      },
      fetchData () {
        this.$http
          .get('https://mome-app.firebaseio.com/users/' + this.userID + '.json')
          .then(response => {
            return response.json() // return an a javascript object
          })
          .then(data => {
            this.fetchUser = data // trigger Vue.js to update the DOM
            // console.log(this.fetchUser)
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
      }
    },
    created () {
      this.userID = this.$route.params.admin
      this.fetchData()
      //   console.log('fetch')
    }
  }

</script>
<style>


</style>
