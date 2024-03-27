<script setup lang="ts">
import image from "~/assets/images/header/glen-carrie-birds-chilling.jpg";
const props = defineProps({
    column: {
        type: Object,
        required: true
    },
    keyid: {
        type: Number,
        required: false
    }
});
console.log(props.column);
const text = computed(() => {
    return renderRichText(props.column.text);
});
//NOTE: move this to composables
// const characterReplace: (param1: string) => string = (str: string) => {
    
// }
</script>
<template>
    <article class="row">
        <input type="checkbox" :name="props.column.title.toLowerCase()" :id="props.column._uid" checked>
        <label :for="props.column._uid">
            <div class="row__heading">
                <div class="row__heading--title">{{ props.column.title }}</div>
                <!-- <span class="info__heading--arrow">&#8593;</span> -->
                <span class="row__heading--arrow"></span>
            </div>
        </label>

        <!-- TOGGLE APPEAR IS RESPONSIBLE FOR SMOOTH TRANSITION DISPLAY -->
        <div class="row__content toggleAppear">
            <div class="row__content">
                <div class="row__content--left">
                    <address>
                        {{ props.column.subtitle }}
                    </address>
                </div>
                <div v-html="text" class="row__content--right"></div>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.row {
    padding: 0 3rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #333;
    padding-bottom: 3rem;



    label {}

    input {
        display: none;
    }

    &__heading {
        display: flex;
        padding-bottom: 1.5rem;
        cursor: pointer;



        &--title {
            font-size: 6rem;
            text-align: center;
            cursor: pointer;
            position: relative;
            margin-top: 2.5rem;
            margin-bottom: 3.5rem;
            margin-right: auto;
            display: inline-block;

            @include breakpoint(767) {
                font-size: 3.5rem;
                margin-top: 3.5rem;
                margin-bottom: 0;
                margin-left: auto;margin-right: auto;
            }
        }

        &--arrow {
            &::after {
                content: "\2191";
                font-size: 7rem;
                padding-right: 3rem;
                cursor: pointer;

                @include breakpoint(767) {
                    display: none;
                    visibility:hidden;
                }
            }
        }
    }

    &__content {
        display: flex;
        // padding-bottom: 3rem;
        @include breakpoint(767) {
            flex-direction: column;
        }

        &--left {
            margin-right: 4rem;

            address {
                @include breakpoint(767) {
                    text-align: center;
                    font-size: 3.5rem;
                    margin-bottom: 2rem;
                }
            }
        }

        &--right {
            font-size: 2.5rem;
            line-height: 1.25;
        }
    }
}

.row input:checked~.row__content {
    max-height: 0;

    & * {
        display: none;
        max-height: 0;
    }
}

.row:has(input:checked) {
    height: 13.5rem;
}

// v-html styles
:deep(.row__content--right p) {
    @include breakpoint(767) {
        text-align: center;
    }
}
:deep(.row__content--right ul) {
    width: 90%;
    margin: 2rem auto 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style: none;

    

    li {
        margin-right: 2rem;
        margin-bottom: 0.75rem;
        text-align: center;
    }
}
</style>