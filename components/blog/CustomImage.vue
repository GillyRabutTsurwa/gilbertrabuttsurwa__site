<script setup lang="ts">
import { SanityImage } from '#components';

const props = defineProps({
    asset: Object
});
</script>

<template function>
    <figure>
        <SanityImage :asset-id="props.asset._ref" auto="format"/>
    </figure>
</template>

<style lang="scss" scoped>
figure {
    width: 100%;
    margin-right: 5rem;

    img {
        width: 100%;
        height: 100;
        -o-object-fit: cover;
        object-fit: cover;
    }
}
</style>