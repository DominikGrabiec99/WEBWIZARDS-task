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
  const firstParagraphIdx = props.userAbout?.indexOf(PARAGRAPH_CHART)
  return {
    basic: props.userAbout.slice(0, firstParagraphIdx),
    extend: props.userAbout.slice(firstParagraphIdx + 1)
  }
})

const toggleIsExtendedText = () => {
  isTextExpanded.value = !isTextExpanded.value
}
</script>

<template>
  <div class="about">
    <MoleculeExtendedText
      :text="text.basic"
      :extend-text="text.extend"
      text-class="about__text"
      :is-text-expanded="isTextExpanded"
    />
    <AtomButton
      v-if="isMoreThanOneParagraph"
      class="about__button"
      :text="buttonText"
      :aria-expanded="isTextExpanded.toString()"
      :aria-controls="'extended-text'"
      @click="toggleIsExtendedText"
    />
  </div>
</template>

<style lang="scss" scoped>
$padding-section: 1rem;
$padding-section-desktop: 2rem;

.about {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: $padding-section;
  padding-top: 2rem;
  background-color: $lightBlue;
  border-radius: 0 0 $sectionRadius $sectionRadius;
  box-shadow: $shadow-md;

  @include respond-to(md) {
    padding: $padding-section-desktop;
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
