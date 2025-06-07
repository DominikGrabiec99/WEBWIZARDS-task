<script setup lang="ts">
/** ENUMS */
import { EButtonVariantType } from '@/ts/enums/ButtonVariantType'

defineProps({
  text: {
    type: String,
    default: ''
  }
})

const router = useRouter()

const refreshPage = () => {
  router.go(0)
}
</script>

<template>
  <div class="alert">
    <p class="alert__text">{{ text }}</p>
    <AtomButton
      class="alert__button"
      text="Odświerz stronę"
      :variant="EButtonVariantType.GHOST"
      @click="refreshPage"
    />
  </div>
</template>

<style lang="scss" scoped>
.alert {
  background-color: $redAlert;
  padding: $paddingSection;
  box-shadow: $shadow-sm;
  border-radius: $sectionRadius;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.25rem;

  @include respond-to(md) {
    padding: $paddingSectionDesktop;
  }

  &__text {
    color: $white;
  }

  &__button {
    width: fit-content;
    font-size: 1rem;
    font-weight: 600;
  }
}
</style>
