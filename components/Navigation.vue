<script setup>

</script>
<template>
    <div class="icon-bar">
        <a href="#" class="github"><i class="fa fa-github"></i></a>
        <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
        <a href="#" class="google"><i class="fa fa-envelope"></i></a>
        <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
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