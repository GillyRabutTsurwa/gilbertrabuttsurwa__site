<script setup>
const props = defineProps({
    project: {
        type: Object,
        required: true
    }
});

const isHovered = ref(false);
const isHoveredTwo = ref(false);

const buttonStyles = computed(() => {
    return {
        color: isHovered.value ? props.project.button_background_colour.color : props.project.button_text_colour.color,
        "background-color": isHovered.value ? props.project.button_text_colour.color : props.project.button_background_colour.color,
        "border-bottom": isHovered.value ? props.project.button_background_colour.color : props.project.button_text_colour.color
    }
});

const buttonStylesTwo = computed(() => {
    return {
        color: isHoveredTwo.value ? props.project.button_background_colour.color : props.project.button_text_colour.color,
        "background-color": isHoveredTwo.value ? props.project.button_text_colour.color : props.project.button_background_colour.color,
        "border-bottom": isHoveredTwo.value ? props.project.button_background_colour.color : props.project.button_text_colour.color
    }
});
</script>

<template>
    <article class="showcase-item">
        <div class="showcase-item-x">
            <img :src="project.thumbnail_image.filename" :alt="project.thumbnail_image.filename.alt"
                class="item__img" />
        </div>
        <div class="showcase-item-y">
            <a @mouseover="isHovered = true" @mouseleave="isHovered = false" :href="project.app_link.url"
                :style="buttonStyles" target="_blank" rel="noreferrer" class="card__button first">Link to Website
                <i class="devicon-devicon-plain" />
            </a>
            <a @mouseover="isHoveredTwo = true" @mouseleave="isHoveredTwo = false" :href="project.github_link.url"
                :style="buttonStylesTwo" target="_blank" rel="noreferrer" class="card__button first">Link to Code
                <i class="devicon-github-plain" />
            </a>
        </div>
    </article>
</template>

<!-- </div> -->
<style lang="scss">
.showcase-item {
    position: relative;
    width: 100%;

    &:hover .showcase-item-x {
        -webkit-filter: blur(7px);
        filter: blur(7px);
    }

    &:hover .showcase-item-y {
        opacity: 1;
        visibility: visible;
    }

    &-x {
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }

    &-y {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        visibility: hidden;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        z-index: 1000;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .item__img {
        width: 100%;
        height: 100%;
    }

    .card__button {

        &,
        &:link,
        &:visited {
            display: inline-block;
            font-size: 3rem;
            // color: rgb(45, 119, 231);
            font-size: 1.6rem;
            text-decoration: none;
            // border-bottom: 1px solid rgb(45, 119, 231);
            padding: 7.5px;
            -webkit-transition: all 0.5s ease;
            transition: all 0.5s ease;
        }

        &:hover,
        &:active {
            // background-color: rgb(45, 119, 231);
            // color: #fff;
            // border-bottom: 1px solid #fff;
        }
    }
}
</style>
