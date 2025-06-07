<script setup lang="ts">
defineProps({
  userImage: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="container">
    <section class="information-container">
      <img :src="userImage" alt="" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.information-container {
  background: $darkBlue;
  padding: 1rem;
  border-radius: 1rem;
  position: relative;

  @include respond-to(md) {
    padding: 2rem;
  }
}
</style>
