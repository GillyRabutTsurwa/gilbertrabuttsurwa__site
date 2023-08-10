<script setup></script>
<template>
    <aside>
        <slot name="categories"></slot>
        <slot name="instaposts"></slot>
        <slot name="newsletter"></slot>
    </aside>
</template>


<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 4rem;
    width: 50rem;
}
</style>
