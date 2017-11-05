<template>
  <div class="container col-md-8 col-md-offset-2">
    <div class="card">
      <div class="header" style="margin: 0px 15px">
        <h2>
          Bookmark Your Favorite Sites &nbsp<span class="ti-bookmark"></span>
        </h2>
      </div>
      <div class="content" style="margin: 0px 10px">
        <form @submit.prevent="validateBeforeSubmit">
          <div class="form-group" :class="{'has-error': errors.has('Bookmark Name') }">
            <label class="control-label" for="Bookmark Name">Site Name</label>
            <input type="text" class="form-control" name="Bookmark Name" placeholder="Website Name" v-model="bookmark.siteName" v-validate
              data-vv-rules="required|min:3">
            <p class="text-danger" v-if="errors.has('Bookmark Name')">{{ errors.first('Bookmark Name') }}</p>
          </div>
          <div class="form-group" :class="{'has-error': errors.has('Bookmark URL') }">
            <label class="control-label" for="Bookmark URL">Site URL</label>
            <input type="text" class="form-control" name="Bookmark URL" placeholder="Website URL" v-model="bookmark.siteUrl" v-validate
              data-vv-rules="required|url">
            <p class="text-danger" v-if="errors.has('Bookmark URL')">{{ errors.first('Bookmark URL') }}</p>
          </div>
          <button class="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    </div>
    <div class="row marketing">
      <div class="col-md-12">
        <!-- <button class="btn bth-primary" @click="fetchData">Get Data</button>
        <br><br> -->
        <div id="bookmarksResults" v-for="b in fetchBookmarks" :key="b.siteUrl">
          <div class="well">
            <h3 style="margin: 0px 15px">{{b.siteName}}
              <span class="pull-right">
                <a class="btn btn-default" target="_blank" v-bind:href="'https://'+b.siteUrl">Visit</a>
                <a class="btn btn-danger" @click="deleteBookmark(b)">Delete</a>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Bookmarker',
    data () {
      return {
        bookmark: {
          siteName: '',
          siteUrl: ''
        },
        fetchBookmarks: [],
        AlreadyBooked: false,
        userID: ''
      }
    },
    methods: {
      validateBeforeSubmit (e) {
        this.$validator.validateAll()
        if (!this.errors.any()) {
          this.validateLinkURL()
          this.submit()
        }
      },
      validateLinkURL () {
        if (this.bookmark.siteUrl.includes('://')) {
          this.bookmark.siteUrl = this.bookmark.siteUrl.split('://')[1]
        }
      },
      submit () {
        if (this.fetchBookmarks) {
          for (let key in this.fetchBookmarks) {
            if (
              this.fetchBookmarks[key].siteName === this.bookmark.siteName ||
              this.fetchBookmarks[key].siteUrl === this.bookmark.siteUrl
            ) {
              this.AlreadyBooked = true
            }
          }
          if (!this.AlreadyBooked) {
            this.$http.post('https://mome-app.firebaseio.com/users/' + this.userID + '/bookmarks.json', this.bookmark).then(
              response => {
                // define how to deal with the response
                this.notifyVue('success', 'Bookmark Successfully', 'Your bookmark has been saved')
                this.fetchData()
                // this.clearInput()
              },
              error => {
                // define how to deal with error
                this.notifyVue('danger', 'Unfortunately', 'Failed to save your bookmark')
                console.log(error)
              }
            )
          } else {
            this.notifyVue('warning', 'Already Bookmarked', 'Your bookmark has been booked')
            this.AlreadyBooked = false
          }
        } else {
          this.$http.post('https://mome-app.firebaseio.com/users/' + this.userID + '/bookmarks.json', this.bookmark).then(
            response => {
              // define how to deal with the response
              this.notifyVue('success', 'Bookmark Successfully', 'Your bookmark has been saved')
              this.fetchData()
              // this.clearInput()
            },
            error => {
              // define how to deal with error
              this.notifyVue('danger', 'Unfortunately', 'Failed to save your bookmark')
              console.log(error)
            }
          )
        }
      },
      fetchData () {
        this.$http
          .get('https://mome-app.firebaseio.com/users/' + this.userID + '/bookmarks.json')
          .then(response => {
            return response.json() // return an a javascript object
          })
          .then(data => {
            this.fetchBookmarks = data // trigger Vue.js to update the DOM
          })
      },
      deleteBookmark (deleteBookmark) {
        for (let key in this.fetchBookmarks) {
          if (
            this.fetchBookmarks[key].siteName === deleteBookmark.siteName &&
            this.fetchBookmarks[key].siteUrl === deleteBookmark.siteUrl
          ) {
            this.$http
              .delete(
                'https://mome-app.firebaseio.com/users/' + this.userID + '/bookmarks/' + key + '.json'
              )
              .then(
                response => {
                  this.notifyVue('success', 'Delete Successfully', 'Your bookmark has been deleted')
                  this.fetchData()
                },
                error => {
                  this.notifyVue('danger', 'Unfortunately', 'Failed to delete your bookmark')
                  console.log(error)
                }
              )
          }
        }
      },
      clearInput () {
        this.bookmark.siteName = ''
        this.bookmark.siteUrl = ''
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
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input,
  textarea {
    background-color: #cfcfcf;
  }

</style>
