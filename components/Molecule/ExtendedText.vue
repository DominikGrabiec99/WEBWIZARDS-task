<script setup lang="ts">
defineProps({
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

const { beforeEnter, enter, afterEnter, beforeLeave, leave } = useTransitionHooks()
</script>

<template>
  <div class="text-box">
    <p class="text-box__text" :class="[textClass]">
      {{ text }}
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
      >
        <span
          v-if="isTextExpanded"
          id="extended-text"
          class="text-box__text--expand"
          role="region"
          aria-live="polite"
        >
          {{ extendText }}
        </span>
      </transition>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.text-box {
  &__text {
    white-space: pre-line;

    &--expand {
      display: inline-block;
      overflow: hidden;
      vertical-align: top;
    }
  }
}
</style>
