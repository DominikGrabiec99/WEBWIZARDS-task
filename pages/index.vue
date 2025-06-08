<script setup lang="ts">
const { user, isUserError, fetchingUser } = useUserData()
const { userFullName } = useUserInformation(user)

const headTitle = computed(() => `${userFullName.value} - pracownik firmy WEBWIZARDS`)
const headDescription = computed(() => `Poznaj naszego pracownika ${userFullName.value}`)

useHead({
  title: headTitle,
  meta: [
    { name: 'description', content: headDescription },
    { property: 'og:title', content: headTitle },
    { property: 'og:description', content: headDescription }
  ]
})
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

  min-height: 100vh;
  padding: 1rem;
  padding-top: 4rem;
  background: $lightGrey;

  @include respond-to(md) {
    padding-block: 2rem;
  }
}
</style>
