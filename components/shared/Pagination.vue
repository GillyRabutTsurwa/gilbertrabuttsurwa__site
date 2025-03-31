<script setup lang="ts">
const props = defineProps({
  postsPerPage: {
    type: Number,
    required: true,
    default: 5,
  },
  postsLength: {
    type: Number,
    required: true,
  },
});

const pagination: Ref<HTMLUListElement | null> = ref(null);
const emit = defineEmits(["paginate"]);
const pageNumbers = computed(() => {
  const pageNos = [];
  let pageNumLimit = Math.ceil(props.postsLength / props.postsPerPage);
  for (let index = 1; index <= pageNumLimit; index++) {
    pageNos.push(index);
  }
  return pageNos;
});
function paginatePg(pageNum: number) {
  emit("paginate", pageNum);
}

onMounted(() => {
  //@todo: Refactor this Code
  pagination.value.addEventListener("mouseover", (e) => {
    if (e.target.tagName === "BUTTON") {
      e.target.style.backgroundColor = "#c69963";
      e.target.style.color = "#101d2c";
    }
  });

  pagination.value.addEventListener("mouseout", (e) => {
    if (e.target.tagName === "BUTTON") {
      e.target.style.backgroundColor = "#101d2c";
      e.target.style.color = "#c69963";
    }
  });
});
</script>

<template>
  <menu ref="pagination" class="pagination-list">
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
      color: $colour-secondary;
    }
  }
}
</style>
