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

const user = toRef(props.user)

const { userImage, userFullName, userPhoneNumber, userEmail, userAbout } = useUserInformation(user)

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
  <div class="information-box">
    <section class="information-box__main-information">
      <div class="information-box__image-wrapper" role="img" :aria-label="userFullName">
        <img
          class="information-box__img"
          :src="userImage"
          :alt="`zdjęcie użytkownika ${userFullName}`"
          loading="lazy"
        />
      </div>

      <MoleculeUserInformation
        :user-full-name="userFullName"
        :user-email="userEmail"
        :user-phone-number="userPhoneNumber"
        @download-user-information="downloadUserInformation"
      />
    </section>
    <section class="information-box__about">
      <OrganismUserAbout :user-about="userAbout" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
$information-box-height: 15.5rem;

.information-box {
  &__main-information {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: $information-box-height;
    padding: $paddingSection;
    background: $darkBlue;
    border-radius: $sectionRadius $sectionRadius 0 0;
    box-shadow: $shadow-sm;

    @include respond-to(md) {
      flex-direction: row;
      gap: 2rem;
      padding: $paddingSectionDesktop;
      border-radius: $sectionRadius;
    }
  }

  &__about {
    @include respond-to(md) {
      padding-inline: $paddingSectionDesktop;
    }
  }

  &__image-wrapper {
    @include flex-center;

    position: relative;
    flex-shrink: 0;
    margin-top: -4rem;
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
