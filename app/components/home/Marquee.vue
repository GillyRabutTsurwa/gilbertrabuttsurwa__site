<script setup lang="ts">

</script>

<template>
    <section class="marquee-container">
        <h2>What I Use</h2>
        <h3>Front-End</h3>
        <ClientOnly>
            <Vue3Marquee :duration="90" pauseOnHover>
                <i class="devicon-tailwindcss-plain"></i>
                <i class="devicon-sass-plain"></i>
                <i class="devicon-javascript-plain"></i>
                <i class="devicon-vuejs-plain"></i>
                <i class="devicon-nuxtjs-plain"></i>
                <i class="devicon-typescript-plain"></i>
                <i class="devicon-svelte-plain"></i>
                <i class="devicon-react-plain"></i>
                <i class="devicon-webpack-plain"></i>
                <i class="devicon-wordpress-plain"></i>
                <i class="devicon-storybook-plain"></i>
                <i class="devicon-jest-plain"></i>
            </Vue3Marquee>
            <h3>Back-End</h3>
            <Vue3Marquee :duration="90" direction="reverse" pauseOnHover>
                <i class="devicon-nodejs-plain"></i>
                <i class="devicon-express-original"></i>
                <i class="devicon-mongodb-plain"></i>
                <i class="devicon-php-plain"></i>
                <i class="devicon-mysql-plain"></i>
                <i class="devicon-cassandra-plain"></i>
                <i class="devicon-postman-plain"></i>
                <i class="devicon-supabase-plain"></i>
            </Vue3Marquee>
            <h3>Other</h3>
            <Vue3Marquee :duration="90" pauseOnHover>
                <i class="devicon-git-plain"></i>
                <i class="devicon-github-plain"></i>
                <i class="devicon-towergit-plain"></i>
                <i class="devicon-netlify-plain"></i>
                <i class="devicon-vercel-plain"></i>
                <i class="devicon-vscode-plain"></i>
                <i class="devicon-homebrew-plain"></i>
                <i class="devicon-linux-plain"></i>
                <i class="devicon-nano-plain"></i>
                <i class="devicon-ohmyzsh-plain"></i>
                <i class="devicon-bash-plain"></i>
                <i class="devicon-ssh-plain"></i>
                <i class="devicon-ansible-plain"></i>
            </Vue3Marquee>
        </ClientOnly>
    </section>
</template>


<style lang="scss" scoped>
.marquee-container {
    width: 100%;
    height: 100dvh;
    overflow: hidden;
    background-color: $colour-secondary;
    padding: 7rem 0;
}

:is(h2, h3) {
    // margin: 2rem 0;
    text-align: center;
    color: $colour-primary;
}

h2 {
    font-size: 4rem;
}

h3 {
    font-size: 3rem;
}

i {
    font-size: 15rem;
    color: $colour-primary;
}

.vue3-marquee {
    max-width: 100%;
    overflow: hidden;
    margin-block: 3rem;

    // NOTE: pas necessaire de nester qq'chose tant simple
    &:nth-of-type(2) .marquee i {
        margin-right: 8rem;
    }

    .marquee {
        i {
            margin-right: 2rem;
        }
    }
}
</style>