<script setup>
const props = defineProps({
    columns: {
        type: Array,
        required: true
    }
});
</script>

<template>
    <Column v-for="(currentColumn, index) in props.columns" :key="index" :column="currentColumn" />
</template>

<style lang="scss">
.columns {
    display: grid;
    // grid-template-columns: repeat(3, 1fr); //TODO: changer ça demain
    // height: 100vh;

    &__box {
        position: relative;
        width: 100%;
        height: 100%;

        //TESTING
        &:nth-of-type(2):hover &--back {
            background-color: #fefefe !important;
            color: #1a2934 !important;
        }

        &:hover &--front {
            opacity: 0;
        }

        &:hover &--back {
            opacity: 1;
        }

        &--front,
        &--back {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            display: -webkit-box;

            display: -ms-flexbox;

            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;

            // TESTING:
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
        }

        &--front {
            font-family: inherit;
            text-transform: uppercase;
            font-weight: bold;
        }

        &--back {
            opacity: 0;
            background-color: #1a2934;
            color: #fff;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            font-size: 2.5rem;

            padding: 0 2rem;
        }
    }

    &__title {
        font-size: 5rem;
    }

    &__subtitle {
        margin-bottom: 2rem;
    }

    &__text {
        padding: 0 1.5rem;
        line-height: 1.5;
    }

    &__list {
        list-style: none;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;

        &--item {
            margin: 1.25rem;
        }
    }
}
</style>
