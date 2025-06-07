<script setup lang="ts">
const { user, isUserError, fetchingUser } = useUserData()
</script>

<template>
  <div class="main-page">
    <div v-if="fetchingUser">loading</div>
    <div v-else-if="isUserError">error</div>
    <OrganismUserInformationBox v-else :user="user" />
  </div>
</template>

<style lang="scss" scoped>
.main-page {
  @include flex-center;
  background: $lightGrey;
  min-height: 100vh;
  padding: 1rem;

  @include respond-to(md) {
    padding-block: 2rem;
  }
}
</style>
