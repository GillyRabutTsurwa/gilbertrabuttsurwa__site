<script setup lang="ts">
const user = useSupabaseUser();
definePageMeta({
    middleware: "auth"
});
</script>

<template>
    <Navigation />
    <div>
        <h2>this is the uncensored page</h2>
        <pre>{{ user }}</pre>
    </div>
</template>


<style lang="scss" scoped></style>