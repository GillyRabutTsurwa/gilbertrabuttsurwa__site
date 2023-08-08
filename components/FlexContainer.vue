<script setup>
const props = defineProps({
    layout: {
        type: String,
        default: "row"
    }
})
</script>
<template>
    <div style="display: flex;" :style="{ 'flex-direction': props.layout }">
        <slot></slot>
    </div>
</template>


<style lang="scss" scoped></style>