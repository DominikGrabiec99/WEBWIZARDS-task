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
  <section class="alert" role="alert" :aria-label="text || 'Komunikat systemowy'">
    <p class="alert__text">{{ text }}</p>
    <AtomButton
      class="alert__button"
      text="Odśwież stronę"
      :variant="EButtonVariantType.GHOST"
      aria-label="Odśwież stronę - ponownie załaduj zawartość"
      @click="refreshPage"
    />
  </section>
</template>

<style lang="scss" scoped>
.alert {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: $paddingSection;
  font-size: 1.25rem;
  background-color: $redAlert;
  border-radius: $sectionRadius;
  box-shadow: $shadow-sm;

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
