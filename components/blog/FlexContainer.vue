<script setup lang="ts">
interface Props {
    layout: string;
    contentJustify: string;
    itemsAlign: string;
}

interface Flex {
    display: string;
    flexDirection: string;
    justifyContent: string;
    alignItems: string;
}

const props = defineProps<Props>();


const flexStyles: ComputedRef<Flex> = computed(() => {
    return {
        display: "flex",
        flexDirection: props.layout || "row",
        justifyContent: props.contentJustify || "center",
        alignItems: props.itemsAlign || "center",
    }
})
</script>
<template>
    <div class="flex-component-container" :style="flexStyles">
        <slot></slot>
    </div>
</template>


<style lang="scss" scoped></style>