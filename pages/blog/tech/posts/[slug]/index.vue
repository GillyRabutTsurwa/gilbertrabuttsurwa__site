<template>
  <Post :postData="state.post" />
</template>
    
<script setup>
const route = useRoute();
const url = route.params.slug;
const state = reactive({
  post: {},
});

const query = groq`*[_type == "tech-post" && slug.current == "${url}"] {
  ...,
  author->
}`;

console.log(await useSanityQuery(query));

const { data, pending, error } = await useSanityQuery(query);
state.post = data.value[0];
console.log(state.post);
</script>