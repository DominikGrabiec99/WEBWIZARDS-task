<script setup lang="ts">
/** ENUMS */
import { ESkeletonVariantType } from '@/ts/enums/SkeletonVariantType'
</script>

<template>
  <div class="skeleton-container">
    <AtomSkeleton
      width="100%"
      height="100%"
      :variant="ESkeletonVariantType.DARK"
      class="skeleton-container__information"
    >
      <div class="skeleton-container__img-box">
        <AtomSkeleton width="240px" height="240px" class="skeleton-container__img" />
      </div>
      <div class="skeleton-information">
        <div class="skeleton-information__header">
          <AtomSkeleton width="220px" height="28px" />
          <AtomSkeleton width="50px" height="20px" />
        </div>
        <div class="skeleton-information__label">
          <AtomSkeleton width="70px" height="20px" />
          <AtomSkeleton width="160px" height="20px" />
        </div>
        <div class="skeleton-information__label">
          <AtomSkeleton width="120px" height="20px" />
          <AtomSkeleton width="80px" height="20px" />
          <AtomSkeleton width="50px" height="20px" />
        </div>
      </div>
    </AtomSkeleton>
    <AtomSkeleton
      width="90%"
      height="100%"
      :variant="ESkeletonVariantType.DARK"
      class="skeleton-container__about"
    >
      <div class="skeleton-container__about-box">
        <AtomSkeleton width="100%" height="60px" />
        <AtomSkeleton width="50px" height="20px" />
      </div>
    </AtomSkeleton>
  </div>
</template>

<style lang="scss" scoped>
.skeleton-container {
  &__information {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: $paddingSection;

    @include respond-to(md) {
      flex-direction: row;
      padding: $paddingSectionDesktop;
    }
  }

  &__img-box {
    @include flex-center;

    position: relative;
    flex-shrink: 0;
    margin-top: -4rem;

    @include respond-to(md) {
      display: block;
      width: 240px;
    }
  }

  &__img {
    border: 2px solid $gray-700;
  }

  &__about {
    padding: $paddingSection;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin-inline: auto;

    @include respond-to(md) {
      padding: $paddingSectionDesktop;
    }
  }

  &__about-box {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;
  }
}

.skeleton-information {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @include respond-to(md) {
    gap: 2rem;
    margin-bottom: 4rem;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  &__label {
    display: flex;
    gap: 0.5rem;
  }
}
</style>
