<script>
  import { onMount } from "svelte";
  let randomIconIndex = "";
  let iconArray = [
    "html5-plain",
    "css3-plain",
    "javascript-plain",
    "bootstrap-plain",
    "sass-original",
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

  const returnRandomIndex = () => {
    randomIconIndex = iconArray[Math.floor(Math.random() * iconArray.length)];
  };

  onMount(() => {
    returnRandomIndex();
  });
</script>

<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css" />
</svelte:head>

<div class="loader">
  <i class={`devicon-${randomIconIndex}`} />
</div>

<style lang="scss">
  .loader {
    position: relative;
    height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 5000; // To hide the nav button when load page is running//NOTE: REMEMBER. NEED TO SET A POSITION
    -webkit-transition: opacity 2s ease-in;
    -webkit-transition: opacity 2s ease-in;
    transition: opacity 2s ease-in;
    background-color: #1a2934;
    color: rgb(238, 238, 238);
    & i {
      font-size: 40rem;
    }
  }
</style>
