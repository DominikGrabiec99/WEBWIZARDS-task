<template>
  <div
    class="skeleton"
    :class="[`skeleton--${variant}`]"
    :style="{
      'max-width': width || undefined,
      height: height || undefined
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
/** ENUMS */
import { ESkeletonVariantType } from '@/ts/enums/SkeletonVariantType'

defineProps({
  width: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: ''
  },
  variant: {
    type: String as PropType<ESkeletonVariantType>,
    default: ESkeletonVariantType.LIGHT
  }
})
</script>

<style lang="scss" scoped>
.skeleton {
  width: 100%;
  height: 100%;
  background-color: #e5e7eb;
  border-radius: 1rem;
  animation: skeleton-pulse 1.5s ease-in-out infinite;

  &--light {
    background-color: $gray-200;
  }

  &--dark {
    background-color: $gray-700;
  }
}

@keyframes skeleton-pulse {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }
}
</style>
