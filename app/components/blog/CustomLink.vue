<script lang="ts" setup></script>

<template function>
    <a target="_blank" rel="noopener noreferrer">
        <slot />
    </a>
</template>

<style lang="scss" scoped>
a,
a:link,
a:visited {
    color: $colour-primary;
    text-decoration: none;
}
</style>
