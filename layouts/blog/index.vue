<script setup lang="ts">
// const router = useRouter();
// const user = useSupabaseUser();
// onMounted(() => {
//     watchEffect(async () => {
//         if (!user.value && ) await navigateTo("/projects");
//     });
// })
</script>

<template>
    <div class="blogsettings">
        <slot />
    </div>
</template>

<style lang="scss">
.blogsettings {

    &,
    & * {
        font-family: "League Spartan", sans-serif !important;
    }
}
</style>