<template>
    <h3 v-editable="blok">{{ blok.title }}</h3>
</template>
   
<script setup>
const props = defineProps({ blok: Object });
console.log(props.blok);

</script>