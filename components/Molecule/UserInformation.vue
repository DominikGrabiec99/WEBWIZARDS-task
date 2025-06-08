<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  userFullName: {
    type: String,
    default: ''
  },
  userEmail: {
    type: String,
    default: ''
  },
  userPhoneNumber: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['downloadUserInformation'])

const showPhoneNumber = ref(false)

const phoneNumber = computed(() =>
  showPhoneNumber.value
    ? formatPhoneNumber(props.userPhoneNumber)
    : `XXXXXX${props.userPhoneNumber?.slice(-3)}`
)

const toggleShowPhoneNumber = () => {
  showPhoneNumber.value = !showPhoneNumber.value
}
</script>

<template>
  <section class="information" aria-labelledby="user-heading">
    <div class="information__header">
      <h1 id="user-heading" class="information__header-name">{{ userFullName }}</h1>
      <AtomButton
        class="information__button information__button--download"
        text="Pobierz dane użytkownika"
        :aria-label="`Pobierz dane użytkownika: ${userFullName}`"
        @click="emit('downloadUserInformation')"
      />
    </div>

    <div class="information-contact">
      <div class="information-contact__item">
        <span class="information-contact__label">Email:</span>
        <a
          class="information-contact__link"
          :href="`mailto:${userEmail}`"
          :aria-label="`Wyślij wiadomość email do ${userFullName} na adres ${userEmail}`"
        >
          {{ userEmail }}
        </a>
      </div>

      <div class="information-contact__item">
        <span class="information-contact__label">Numer telefonu:</span>
        <span
          class="information-contact__phone-number"
          :aria-label="showPhoneNumber ? `Numer telefonu: ${phoneNumber}` : 'Ukryty numer telefonu'"
        >
          {{ phoneNumber }}
        </span>
        <AtomButton
          class="information__button information__button--contact"
          :text="showPhoneNumber ? 'Ukryj telefon' : 'Pokaż telefon'"
          :aria-label="showPhoneNumber ? 'Ukryj numer telefonu' : 'Pokaż pełny numer telefonu'"
          @click="toggleShowPhoneNumber"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.information {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: $white;
  width: 100%;

  &__header {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 0.5rem;

    @include respond-to(md) {
      flex-direction: row;
    }
  }

  &__header-name {
    font-size: $sectionTitleSize;
  }

  &__button {
    &--download {
      border-top-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      height: 1.5rem;
      padding-inline: 0.25rem;
      font-weight: 600;
      font-size: 0.75rem;
    }

    &--contact {
      font-size: 0.75rem;
      padding: 0.25rem;
    }
  }

  &-contact {
    display: flex;
    gap: 0.75rem;
    flex-direction: column;

    &__item {
      display: flex;
      gap: 0.25rem;
      align-items: center;
    }

    &__link {
      color: $textBlue;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    &__phone-number {
      min-width: 5.625rem;
    }

    &__label {
      font-size: 1rem;
      font-weight: 500;
    }
  }
}
</style>
