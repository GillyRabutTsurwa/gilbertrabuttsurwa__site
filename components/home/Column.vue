<script setup lang="ts">
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
</script>
<template>
    <article class="row">
        <input type="checkbox" :name="props.column.title.toLowerCase()" :id="props.column._uid" checked>
        <label :for="props.column._uid">
            <div class="row__heading">
                <div class="row__heading--title">{{ props.column.title }}</div>
                <span class="row__heading--arrow"></span>
            </div>
        </label>

        <!-- TOGGLE APPEAR IS RESPONSIBLE FOR SMOOTH TRANSITION DISPLAY -->
        <div class="collapsible">
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
                margin-left: auto;
                margin-right: auto;
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
                    visibility: hidden;
                }
            }
        }
    }

    .collapsible {
        // NOTE: this is the element whose "height" i am transitioning, with grid-template-rows. not height
        // it works great
        display: grid;
        grid-template-rows: 1fr;
        transition: grid-template-rows 0.5s ease-in;
    }

    &__content {
        // NOTE: this is the child of .collapsible
        // overflow-hidden is to hide all the content (this stuff) that is inside aka the child of .collapsible
        overflow: hidden;
        display: flex;

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

.row input:checked~.collapsible {
    // NOTE: nothing special here, I'm "shortening" the element. again with grid-template-rows, not height
    // NOTE: encore, je me repete, je fais ceci pour bien executer la transition
    grid-template-rows: 0fr;
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