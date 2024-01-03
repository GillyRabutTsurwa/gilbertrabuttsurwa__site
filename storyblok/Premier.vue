<script setup>
const props = defineProps({ blok: Object });
</script>

<template>
    <section v-editable="blok" class="columns">
        <Columns :columns="props.blok.columns" />
    </section>
</template>