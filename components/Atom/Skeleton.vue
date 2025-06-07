<template>
  <div
    class="skeleton"
    :class="[
      `skeleton--width-${widthClass}`,
      `skeleton--height-${heightClass}`,
      `skeleton--${variant}`
    ]"
    :style="{
      width: width || undefined,
      height: height || undefined
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  width: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: ''
  },
  variant: {
    type: String as PropType<'light' | 'dark'>,
    default: 'light'
  }
})

const sanitize = (value: string) => {
  console.log(value)
  if (!value) return 'default'
  if (value.endsWith('%') || value.endsWith('px') || value.endsWith('rem')) {
    return 'custom'
  }
  return value
}

const widthClass = sanitize(props.width)
const heightClass = sanitize(props.height)
</script>

<style lang="scss" scoped>
.skeleton {
  background-color: #e5e7eb;
  border-radius: 1rem;
  animation: skeleton-pulse 1.5s ease-in-out infinite;

  &--width-default {
    width: 100%;
  }

  &--height-default {
    height: 1rem;
  }

  &--width-custom {
    width: unset;
  }

  &--height-custom {
    height: unset;
  }

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
