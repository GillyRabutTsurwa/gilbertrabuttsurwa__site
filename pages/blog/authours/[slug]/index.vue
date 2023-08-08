<script setup>
const route = useRoute();
const url = route.params.slug;
const state = reactive({
    authour: {},
});
const randomNumber = ref(0);

const query = groq`*[_type == "author" && slug.current == "${url}"]`;
const { data, pending, error } = await useSanityQuery(query);
state.authour = data.value[0];

const { name, bio, image } = state.authour;

// NOTE: NEW toggle element
const toggleElement = () => {
    if (randomNumber.value % 2 === 0) {
        randomNumber.value = 1;
    }
    else {
        randomNumber.value = 0;
    }
}

const CustomText = resolveComponent("CustomText");
const serializers = {
    types: {
        text: CustomText
    }
}

const { showElement, toggleElementOnResize } = useBreakpoints();
if (process.client) window.addEventListener("resize", () => (toggleElementOnResize(480)));
onMounted(() => {
    if (process.client) toggleElementOnResize(480);
})



</script>
        
<template>
    <div class="authour">
        <div class="authour__content">
            <h4 class="authour__content--title">{{ name }}</h4>
            <div class="authour__content--text">
                <SanityContent :blocks="bio" :serializers="serializers" />
            </div>
            <button @click="toggleElement" class="button-secondary">Toggle</button>
        </div>
        <div class="authour__assets" v-if="!showElement">
            <figure class="authour__img" v-if="randomNumber % 2 === 0">
                <SanityImage :asset-id="image.asset._ref" auto="format" />
            </figure>
            <MapX v-else />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.authour {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100vh;

    @include breakpoint(1023) {
        grid-template-columns: 1fr;
        grid-template-rows: min-content 1fr;
    }

    &__content {
        padding: 7rem 3rem 0 3rem;
        margin-bottom: 5rem;

        &--title {
            font-size: 3rem;
            text-align: center;
            margin-bottom: 2rem;
        }
    }

    &__img {
        position: sticky;
        top: 0;
        height: 100vh;
        overflow: hidden;

        @include breakpoint(1023) {
            width: 30rem;
            height: 30rem;
            border-radius: 50%;
            margin: 0 auto;
        }

        img {
            width: 100%;
            height: 100%;
            -o-object-fit: cover;
            object-fit: cover;
        }

    }
}
</style>