<script setup lang="ts">
import type { CSSProperties } from 'vue';

interface Props {
    layout: "row" | "row-reverse" | "column" | "column-reverse";
    // @todo - adjuster les types pour ces propriétés ci-dessous
    contentJustify?: string;
    itemsAlign?: string;
}

const props = defineProps<Props>();
const flexStyles: ComputedRef<CSSProperties> = computed(() => {
    return {
        display: "flex",
        flexDirection: props.layout,
        justifyContent: props.contentJustify || "center",
        alignItems: props.itemsAlign || "center",
    }
});
</script>
<template>
    <div :style="flexStyles">
        <slot></slot>
    </div>
</template>