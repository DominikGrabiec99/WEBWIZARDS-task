<script setup lang="ts">
/** INTERFACES */
import type { IUser } from '@/ts/interfaces/User'

/** UTILS */
import downloadJsonFile from '@/utils/downloadJsonFile'

const props = defineProps({
  user: {
    type: Object as PropType<IUser | null>,
    default: null
  }
})
const showPhoneNumber = ref(false)

const user = toRef(props.user)

const { userImage, userFullName, userPhoneNumber, userEmail } = useUserInformation(user)

const phoneNumber = computed(() =>
  showPhoneNumber.value
    ? formatPhoneNumber(userPhoneNumber.value)
    : `XXXXXX${userPhoneNumber.value?.slice(-3)}`
)

const toggleShowPhoneNumber = () => {
  showPhoneNumber.value = !showPhoneNumber.value
}

const downloadUserInformation = () => {
  if (!user.value) {
    return
  }

  try {
    downloadJsonFile(user.value, `${userFullName.value.replace(/ /g, '-')}-information`)
  } catch (error) {
    console.error('downloadUserInformation error:', error)
  }
}
</script>

<template>
  <div class="container information-box">
    <section class="information-box__section">
      <div class="information-box__image-wrapper">
        <img class="information-box__img" :src="userImage" :alt="userFullName" />
      </div>

      <MoleculeUserInformation
        :user-full-name="userFullName"
        :user-email="userEmail"
        :phone-number="phoneNumber"
        @download-user-information="downloadUserInformation"
        @toggle-show-phone-number="toggleShowPhoneNumber"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
$informationBoxHeight: 15.5rem;
.information-box {
  width: 100%;

  &__section {
    background: $darkBlue;
    padding: 1rem;
    border-radius: 1rem;
    position: relative;
    min-height: $informationBoxHeight;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @include respond-to(md) {
      flex-direction: row;
      padding: 2rem;
      gap: 2rem;
    }
  }

  &__image-wrapper {
    @include flex-center;
    position: relative;
    margin-top: -4rem;
    flex-shrink: 0;
  }

  &__img {
    border: 0.125rem solid $white;
    border-radius: 0.75rem;

    @include respond-to(md) {
      border: 0.25rem solid $white;
    }
  }
}
</style>
