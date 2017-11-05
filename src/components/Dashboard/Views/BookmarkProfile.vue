<template>
    <div class="row">
      <div class="col-lg-4 col-md-5">
        <user-card>

        </user-card>
      </div>
      <div class="col-lg-8 col-md-7">
        <edit-profile-form>

        </edit-profile-form>
      </div>
    </div>
</template>
<script>
  import EditProfileForm from './BookmarkProfile/EditBookmarkProfile.vue'
  import UserCard from './BookmarkProfile/BookmarkProfileCard.vue'
  export default {
    components: {
      EditProfileForm,
      UserCard
    }
  }

</script>
<style>

</style>
