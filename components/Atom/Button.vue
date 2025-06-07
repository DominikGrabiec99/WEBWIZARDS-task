<script setup lang="ts">
/** ENUMS */
import { EButtonVariantType } from '@/ts/enums/ButtonVariantType'

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  variant: {
    type: String as PropType<EButtonVariantType>,
    default: EButtonVariantType.PRIMARY
  },
  ariaLabel: {
    type: String,
    default: ''
  }
})

const variantClass = computed(() => {
  if (props.variant === EButtonVariantType.PRIMARY) {
    return 'button--primary'
  }

  if (props.variant === EButtonVariantType.GHOST) {
    return 'button--ghost'
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
  cursor: pointer;
  &--primary {
    background-color: $pearlBlue;
    color: $white;
    border: none;

    &:hover {
      opacity: 0.8;
    }
  }

  &--ghost {
    border: none;
    background-color: transparent;
    color: $white;

    &:hover {
      text-decoration: underline;
    }
  }

  :focus-visible {
    outline: 3px solid #2563eb;
    outline-offset: 2px;
  }
}
</style>
