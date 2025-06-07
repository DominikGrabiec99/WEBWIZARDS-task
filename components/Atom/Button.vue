<script setup lang="ts">
/** ENUMS */
import { ButtonVariantType } from '@/ts/enums/ButtonVariantType'

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  variant: {
    type: String as PropType<ButtonVariantType>,
    default: ButtonVariantType.PRIMARY
  },
  ariaLabel: {
    type: String,
    default: ''
  }
})

const variantClass = computed(() => {
  if (props.variant === ButtonVariantType.PRIMARY) {
    return 'button--primary'
  }

  return ''
})
</script>
<template>
  <button class="button" :class="[variantClass]" :aria-label="ariaLabel || text || 'button'">
    <slot>{{ text }}</slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  &--primary {
    background-color: $pearlBlue;
    color: $white;
    border: none;
    cursor: pointer;
  }

  :focus-visible {
    outline: 3px solid #2563eb;
    outline-offset: 2px;
  }
}
</style>
