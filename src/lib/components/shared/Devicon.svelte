<script>
    import { onMount } from "svelte";
    import imageOne from "$lib/images/header/adrian.jpg";
  
    let currentIndex = 0;
    let currentIndexTwo = 0;
  
    let iconArray = [
      "html5-plain",
      "css3-plain",
      "sass-original",
      "javascript-plain",
      "vuejs-plain",
      "nuxtjs-plain",
      "react-plain",
      "bootstrap-plain",
      "tailwindcss-plain",
      "jquery-plain",
      "nodejs-plain",
      "express-original-wordmark",
      "mongodb-plain-wordmark",
      "git-plain",
      "github-plain",
      "webpack-plain",
      "babel-plain",
      "heroku-original-wordmark",
      "gulp-plain",
    ];
  
    // $: backgroundImage: `url(${imageOne})`
  
    const nextIcon = () => {
      currentIndexTwo += 1;
      if (currentIndexTwo > iconArray.length - 1) {
        currentIndexTwo = 0;
      }
    };
  
    const startIcons = () => {
      setInterval(nextIcon, 4000);
    };
  
    $: currentDevicon = iconArray[currentIndexTwo];
  
    onMount(() => {
      startIcons();
    });
  </script>

<i class={`devicon-${currentDevicon}`} />

<style lang="scss">
    @use "../../sass/variables";
    i[class^="devicon"] {
        display: block;
        font-size: 9.5rem;
        z-index: 1000;
        color: variables.$steelblue;
        -webkit-animation: fade 3800ms ease-in-out infinite;
        animation: fade 3800ms ease-in-out infinite;
    }
</style>