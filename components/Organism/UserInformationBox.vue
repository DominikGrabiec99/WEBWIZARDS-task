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
      <div class="information-box__image-wrapper">
        <img class="information-box__img" :src="userImage" :alt="userFullName" />
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
$informationBoxHeight: 15.5rem;

.information-box {
  &__main-information {
    background: $darkBlue;
    padding: $paddingSection;
    border-radius: $sectionRadius $sectionRadius 0 0;
    position: relative;
    min-height: $informationBoxHeight;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: $shadow-sm;

    @include respond-to(md) {
      flex-direction: row;
      padding: $paddingSectionDesktop;
      gap: 2rem;
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
