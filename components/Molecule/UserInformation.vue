<script setup lang="ts">
defineProps({
  userFullName: {
    type: String,
    default: ''
  },
  userEmail: {
    type: String,
    default: ''
  },
  phoneNumber: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['downloadUserInformation', 'toggleShowPhoneNumber'])
</script>

<template>
  <div class="information">
    <div class="information__header">
      <h3 class="information__header-name">{{ userFullName }}</h3>
      <button
        class="information__button information__button--download"
        @click="emit('downloadUserInformation')"
      >
        Pobierz dane użytkownika
      </button>
    </div>

    <div class="information-contact">
      <div class="information-contact__item">
        <span class="information-contact__label">Email:</span>
        <a class="information-contact__link" :href="`mailto:${userEmail}`">
          {{ userEmail }}
        </a>
      </div>

      <div class="information-contact__item">
        <span class="information-contact__label">Numer telefon:</span>
        <span class="information-contact__phone-number">{{ phoneNumber }}</span>
        <button
          class="information__button information__button--contact"
          @click="emit('toggleShowPhoneNumber')"
        >
          Pokaż telefon
        </button>
      </div>
    </div>
  </div>
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
    background-color: $pearlBlue;
    color: $white;
    border: none;
    cursor: pointer;

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
