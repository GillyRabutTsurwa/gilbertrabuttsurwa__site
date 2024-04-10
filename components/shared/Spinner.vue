<template>
  <div class="loader">
    <span class="loader__icon"></span>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  width: 100%;
  height: 30%;
  display: grid;
  place-items: center;

  &__icon {
    width: 48px;
    height: 48px;
    border: 5px solid $whitish;
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
