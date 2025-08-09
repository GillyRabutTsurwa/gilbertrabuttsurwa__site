<script setup lang="ts">
import type { PostInt } from "~/interfaces/post";
import { post } from "~/queries";

const route = useRoute();
const url = route.params.slug;

const query: string = post(url as string);
const { data: content } = await useSanityQuery<PostInt>(query);
</script>

<template>
  <Preview />
  <Post :post="content" />
</template>