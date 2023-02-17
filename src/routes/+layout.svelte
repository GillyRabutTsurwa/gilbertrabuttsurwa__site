<script>
  import "../lib/sass/main.scss";
</script>

<main class="app">
  <slot />
</main>

<style lang="scss">
  .app {
    // width: 100%;
    // height: 100%;
  }

  .maincontent {
    position: relative;
    z-index: 500;
    background-color: rgb(238, 238, 238);
    color: #1a2934;
    // TESTING:
    width: 100%;
    height: 100vh;
    -webkit-transition: opacity 0.2s ease-in;
    -webkit-transition: opacity 2s ease-in;
    transition: opacity 2s ease-in;
  }
  // this is the flex slider. move me and everything below me
  .slider {
    width: 100%;
    height: 100%;
    &__title {
      height: 10vh;
      font-size: 3rem;
      text-align: center;
      padding: 2rem 0;
    }
    &__container {
      width: 100%;
      height: 86vh;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      border: 2px solid rgb(238, 238, 238);
      .slide {
        position: relative;
        height: 100%;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        border-right: 2px solid rgb(238, 238, 238);
        overflow: hidden;
        -webkit-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
        /* // background-color: #1a2934; */
        cursor: pointer;
      }
    }
  }
  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }
  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }
  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }
  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
</style>
