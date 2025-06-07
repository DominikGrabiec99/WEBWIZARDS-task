<template>
  <div class="container skeleton-container">
    <AtomSkeleton width="100%" height="100%" variant="dark" class="skeleton-container__information">
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
    <AtomSkeleton width="90%" height="100%" variant="dark" class="skeleton-container__about">
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
    display: flex;
    flex-direction: column;
    padding: $paddingSection;
    position: relative;
    gap: 1rem;

    @include respond-to(md) {
      flex-direction: row;
      padding: $paddingSectionDesktop;
    }
  }

  &__img-box {
    @include flex-center;
    position: relative;
    margin-top: -4rem;
    flex-shrink: 0;

    @include respond-to(md) {
      display: block;
      width: 240px;
    }
  }

  &__img {
    border: 2px solid $gray-700;
  }

  &__about {
    margin-inline: auto;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding: $paddingSection;

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
    margin-bottom: 4rem;
    gap: 2rem;
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
