<script setup lang="ts">
const props = defineProps({
    column: {
        type: Object,
        required: true
    }
});
const text = computed(() => {
    return renderRichText(props.column.text);
});
</script>
<template>
    <div class="columns__box">
        <div :style="{ backgroundImage: `linear-gradient(to bottom, ${props.column.dark} 0%, ${props.column.dark} 33%, ${props.column.light} 33%, ${props.column.light} 66%, ${props.column.dark} 66%, ${props.column.dark} 100%)`, color: `${props.column.dark}` }"
            class="columns__box--front">
            <h3 class="columns__title">{{ props.column.title }}</h3>
        </div>
        <div :style="{ backgroundColor: '#1a2934', color: '#fefefe' }" class="columns__box--back">
            <h4 class="columns__subtitle">{{ props.column.subtitle }}</h4>
            <p v-html="text" class="columns__text"></p>
        </div>
    </div>
</template>