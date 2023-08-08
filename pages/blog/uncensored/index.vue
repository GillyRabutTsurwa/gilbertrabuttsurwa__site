<script setup lang="ts">
const { status } = useAuth();
definePageMeta({
    middleware: "auth" //NOTE: this is auth from nuxt-auth
})
</script>

<template>
    <div>
        <h2>this is the uncensored page</h2>
        <pre>{{ status }}</pre>
    </div>
</template>


<style lang="scss" scoped></style>