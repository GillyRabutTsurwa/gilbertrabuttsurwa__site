<script setup lang="ts">
import type { CSSProperties } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: "Read Post"
  },
  isLink: {
    type: Boolean,
    default: false
  },
  path: {
    type: String,
    required: false
  },
  isExternal: {
    type: Boolean,
    default: false
  },
  colourPrimary: {
    type: String,
    required: false
  },
  colourSecondary: {
    type: String,
    required: false
  },
});

const isHovered: Ref<boolean> = ref(false)
const btnStyles: ComputedRef<CSSProperties> = computed(() => {
  return {
    backgroundColor: isHovered.value ? props.colourSecondary : props.colourPrimary,
    color: isHovered.value ? props.colourPrimary : props.colourSecondary,
    border: `2px solid ${isHovered.value ? props.colourPrimary : props.colourSecondary}`
  }
});
</script>

<template>
  <NuxtLink @mouseover="isHovered = true" @mouseleave="isHovered = false" v-if="props.isLink"
    :to="`${props.isLink ? props.path : null}`" class="button" :style="btnStyles"
    :target="isExternal ? '_blank' : '_self'">
    {{ props.text }}
  </NuxtLink>
  <button @mouseover="isHovered = true" @mouseleave="isHovered = false" v-else class="button" :style="btnStyles">
    {{ props.text }}
  </button>
</template>

<style lang="scss" scoped>
.button {
  @include button-config(1.5rem, 2.2rem, 0.5rem);
  font-size: 1.75rem;
  text-decoration: none;
  border: 2px solid transparent;
  transition: all 0.5s ease;
  font-family: inherit;
}
</style>
