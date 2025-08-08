<script setup lang="ts">
import type { Post } from "~/interfaces/post";

interface myPost {
  post: Post
}

const route = useRoute();
const url: string | Array<string> = route.params.slug;

const state: myPost = reactive({
  post: {},
});

const query = groq`*[_type == "post" && postGenre == "tech" && slug.current == "${url}"] {
  ...,
  author->
}`;

const { data, pending, error } = await useSanityQuery(query);
state.post = data.value[0];
</script>

<template>
  <Post :postData="state.post" />
</template>