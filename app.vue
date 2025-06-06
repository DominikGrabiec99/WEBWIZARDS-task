<script setup lang="ts">
const { user, userImage, isUserError, fetchingUser } = useUserData()
</script>

<template>
  <div>
    {{ user }}
    <img :src="userImage" />
  </div>
</template>
