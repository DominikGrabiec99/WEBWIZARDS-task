<script setup lang="ts">
const PARAGRAPH_CHART = '\n\n'
const props = defineProps({
  userAbout: {
    type: String,
    default: ''
  }
})

const isTextExpanded = ref(false)
const isMoreThanOneParagraph = computed(() => props.userAbout?.match(PARAGRAPH_CHART))
const buttonText = computed(() => (isTextExpanded.value ? 'Zwiń tekst' : 'Rozwiń opis'))
const text = computed(() => {
  if (isTextExpanded.value) {
    return props.userAbout
  }

  const firstParagraphIdx = props.userAbout?.indexOf(PARAGRAPH_CHART)

  return props.userAbout.slice(0, firstParagraphIdx)
})

const toggleIsExtendedText = () => {
  isTextExpanded.value = !isTextExpanded.value
}
</script>

<template>
  <div class="about">
    <MoleculeExtendText :text="text" text-class="about__text" :is-text-expanded="isTextExpanded" />
    <AtomButton
      v-if="isMoreThanOneParagraph"
      class="about__button"
      :text="buttonText"
      @click="toggleIsExtendedText"
    />
  </div>
</template>

<style lang="scss" scoped>
$paddingSection: 1rem;
$paddingSectionDesktop: 2rem;

.about {
  background-color: $lightBlue;
  border-radius: 0 0 $sectionRadius $sectionRadius;
  padding: $paddingSection;
  padding-top: 2rem;
  box-shadow: $shadow-md;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @include respond-to(md) {
    padding: $paddingSectionDesktop;
    padding-top: 3rem;
  }

  &__button {
    width: fit-content;
    padding: 0.5rem 0.25rem;
  }
}

:deep(.about__text) {
  font-size: 1rem;
  font-weight: 600;

  @include respond-to(md) {
    padding: 1rem;
  }
}
</style>
