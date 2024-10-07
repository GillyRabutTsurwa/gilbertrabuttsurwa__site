<script setup lang="ts">
import type { Post } from "~/interfaces/post";
import { post } from "~/queries";

const route = useRoute();
const url = route.params.slug;

const query: string = post(url as string);
const { data: content } = await useSanityQuery<Post>(query);
</script>

<template>
  <Post :post="content" />
</template>