<script setup lang="ts">
const { user, isUserError, fetchingUser } = useUserData()
</script>

<template>
  <div class="main-page">
    <div class="container">
      <MoleculeUserSkeleton v-if="fetchingUser" role="status" aria-live="polite" />
      <MoleculeAlert
        v-else-if="isUserError"
        text="Przepraszamy nie udało się pobrac informacji o użytkowniku. Spróbuj ponownie za chwilę!"
      />
      <OrganismUserInformationBox v-else :user="user" />
    </div>
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
