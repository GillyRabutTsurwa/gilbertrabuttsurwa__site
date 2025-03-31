<script setup lang="ts">
interface Props {
  dimensions: number
}

type Styles = {
  width: string;
  height: string;
}

const props = defineProps<Props>();
const styles: ComputedRef<Styles> = computed(() => {
  return {
    width: `${props.dimensions}px`,
    height: `${props.dimensions}px`
  }
});
</script>

<template>
  <div class="loader">
    <span :style="styles" class="loader__icon"></span>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  width: 100%;
  height: 30%;
  display: grid;
  place-items: center;

  &__icon {
    // width: 48px;
    // height: 48px;
    border: 5px solid $colour-secondary;
    border-bottom-color: $colour-primary;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
