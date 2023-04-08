<script setup>
const navigation = ref(null); //NOTE: this is our template ref
const showNavigation = ref(false);
const navShow = computed(() => {
    return {
        show: showNavigation.value //PASS: i can do this inline mais je voulas faire qq'chose de different
    }
})
onMounted(() => {
    setTimeout(() => {
        /**
         * NOTE: delay navigation render
         * this is so that the navigation ne s'affiche sur le composant Loader
         * @todo - make navigation transparent en filant
         */
        showNavigation.value = true;
    }, 2700);
    const header = navigation.value.parentNode.children[1].children[0];
    console.dir(header);
});
</script>
<template>
    <div :class="navShow" class="icon-bar" ref="navigation">
        <a href="https://github.com/GillyRabutTsurwa" target="_blank" rel="noreferrer noopener" class="github"><i
                class="fa fa-github"></i></a>
        <a href="https://www.linkedin.com/in/gilberttsurwa" target="_blank" rel="noreferrer noopener" class="linkedin"><i
                class="fa fa-linkedin"></i></a>
        <a href="mailto:rabuttsurwa@outlook.com" rel="noreferrer noopener" class="google"><i class="fa fa-envelope"></i></a>
        <a href="#" target="_blank" rel="noreferrer noopener" class="facebook"><i class="fa fa-facebook"></i></a>
        <NuxtLink to="shop" target="_blank" rel="noreferrer noopener" class="boutique"><i class="fa fa-shopping-cart"></i>
        </NuxtLink>
    </div>
</template>


<style lang="scss" scoped>
.icon-bar {
    position: fixed;
    top: 50%;
    left: 0;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 10000;
    // will hide for transition
    opacity: 0;
    transition: opacity 0.5s ease-in;

    &.show {
        opacity: 1;
    }
}

.icon-bar a {
    display: block;
    text-align: center;
    padding: 16px;
    transition: all 0.3s ease;
    color: white;
    font-size: 20px;
}

.icon-bar a:hover {
    background-color: #000;
}

.facebook {
    background: #3b5998;
    color: white;
}

.github {
    background: #443c41;
    color: white;
}

.google {
    background: #dd4b39;
    color: white;
}

.linkedin {
    background: #007bb5;
    color: white;
}

.youtube {
    background: #bb0000;
    color: white;
}

.boutique {
    background-color: rgb(231, 61, 61);
    color: white;
}
</style>