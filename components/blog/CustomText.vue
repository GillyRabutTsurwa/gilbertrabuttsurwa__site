<script lang="ts" setup></script>

<template function>
  <p class="post-text">
    <slot />
  </p>
</template>

<style lang="scss">
//NOTE: before, these styles were being applied to all p tags in the app, which i didn't want
// this fixes it. very well (helped by the inspector to figure out which parent element to target)
.blog-content__description {
  p {
    margin-bottom: 3.5rem;
    line-height: 1.75;
    font-size: 2rem;
    font-weight: normal;
  }
}
</style>
