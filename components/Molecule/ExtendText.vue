<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  extendText: {
    type: String,
    default: ''
  },
  textClass: {
    type: String,
    default: ''
  },
  isTextExpanded: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="text-box">
    <transition name="expand">
      <p class="text-box__text" :class="[textClass]">{{ text }}</p>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.text-box {
  &__text {
    white-space: pre-line;
  }
}
</style>
