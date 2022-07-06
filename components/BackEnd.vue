<template>
  <div class="back-end-container">
    <h4 style="color: #1a2934; font-size: 8rem">Projects Coming in the Autumn</h4>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.back-end-container {
  grid-column: 1 / -1;
  display: grid;
  gap: 4rem;
  grid-template-rows: repeat(2, 1fr);
  //NOTE: jusqua'ce que je mets le projets...
  place-items: center;
}
</style>