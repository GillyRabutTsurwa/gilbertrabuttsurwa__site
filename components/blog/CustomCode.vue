<script setup>
import hljs from "highlight.js";
// import "../node_modules/highlight.js/styles/night-owl.css";
import "@/node_modules/highlight.js/styles/base16/atelier-seaside.css";


const props = defineProps({
    code: {
        type: String, //NOTE: oops, forgot to revert it to String
        // required: true,
    },
    language: {
        type: String
    },
    filename: {
        type: String
    }
});
const code = ref(null); //this will be parsed code

onMounted(() => {
    hljs.highlightAll();
})
</script>

<template>
    <pre>
        <code :class="`language-${props.language}`" :data-language="props.language">{{ props.code }}</code>
    </pre>
</template>
  
<style lang="scss" scoped>
code {
    // NOTE: styling that will display indicator as intended and NOT affect general styling provided by package
    position: relative;

    &::after {
        content: attr(data-language);
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: #f0f0f0;
    }
}
</style>