<script setup lang="ts">
const { user, userImage, isUserError, fetchingUser } = useUserData()
</script>

<template>
  <div class="main-page">
    <div v-if="fetchingUser">loading</div>
    <div v-else-if="isUserError">error</div>
    <OrganismUserInformationBox v-else :userImage="userImage" />
  </div>
</template>

<style lang="scss" scoped>
.main-page {
  min-height: 100vh;
  background: $lightGrey;
  padding-block: 1rem;

  @include respond-to(md) {
    padding-block: 2rem;
  }
}
</style>
