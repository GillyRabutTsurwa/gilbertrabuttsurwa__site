<script setup>
const props = defineProps({
  postsPerPage: {
    type: Number,
    required: true,
    default: 5
  },
  postsLength: {
    type: Number,
    required: true,
  }
});
const emit = defineEmits(["paginate"]);
const pageNumbers = computed(() => {
  const pageNos = [];
  let pageNumLimit = Math.ceil(props.postsLength / props.postsPerPage);
  for (let index = 1; index <= pageNumLimit; index++) {
    pageNos.push(index)
  }
  return pageNos;
})
function paginatePg(pageNum) {
  emit("paginate", pageNum);
}
</script>

<template>
  <menu class="pagination-list">
    <li v-for="currentPageNum in pageNumbers" v-bind:key="currentPageNum" class="pagination-list__item">
      <button @click="paginatePg(currentPageNum)">{{ currentPageNum }}</button>
    </li>
  </menu>
</template>

<style lang="scss" scoped>
.pagination-list {
  list-style: none;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;

  &__item {
    &:not(:last-child) {
      margin-right: 3rem;
    }

    button {
      cursor: pointer;
      border: none;
      outline: none;
      padding: 1.5rem 2.5rem;
      font-size: 1.8rem;
      background-color: $colour-primary;
      color: $whitish;
    }
  }
}
</style>
