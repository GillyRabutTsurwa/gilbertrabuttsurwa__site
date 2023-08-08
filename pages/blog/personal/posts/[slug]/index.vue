<template>
  <Post :postData="state.post" />
</template>
    
<script setup>
const route = useRoute();
const url = route.params.slug;
const state = reactive({
  post: {},
});

const query = groq`*[_type == "personal-post" && slug.current == "${url}"] {
  ...,
  author->
}`;

const { data, pending, error } = await useSanityQuery(query);
state.post = data.value[0];
</script>