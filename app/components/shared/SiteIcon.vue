<script setup lang="ts">
import logo from "~/assets/images/svg/my-logo.svg"
</script>

<template>
    <img :src="logo" alt="my-logo" class="header__logo" />
</template>

<style lang="scss" scoped>
.header__logo {
    top: 3rem;
    left: 3rem;
}
</style>