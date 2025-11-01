<script setup lang="ts">
const route = useRoute();
const { enabled: previewEnabled, inFrame } = useSanityVisualEditingState();
</script>

<template>
    <ClientOnly>
        <a v-if="previewEnabled && !inFrame" :href="`/preview/disable?redirect=${route.fullPath}`"
            class="preview-toggle">
            <span>Preview Enabled</span>
            <span>Disable Preview</span>
        </a>
    </ClientOnly>
</template>


<style scoped lang="scss">
.preview-toggle {
    backdrop-filter: blur(12px);
    border-radius: 0.25rem;
    bottom: 1rem;
    box-shadow:
        0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
    color: #1f2937;
    display: block;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1rem;
    padding: 1.25rem 2.75rem;
    position: fixed;
    right: 1rem;
    text-align: center;
    text-decoration: none;
    z-index: 50;

    & .span {
        &:first-child {
            display: block;
        }

        &:last-child {
            display: none;
        }
    }

    &:hover {
        background-color: #ef4444;
        color: #ffffff;

        span {
            &:first-child {
                display: none;
            }

            &:last-child {
                display: block;
            }
        }
    }

}
</style>