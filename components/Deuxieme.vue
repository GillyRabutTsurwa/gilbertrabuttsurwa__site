<template>
  <section class="slider">
    <h4 class="slider__title">When I'm bored I
      <span class="dot dot-one">.</span>
      <span class="dot dot-two">.</span>
      <span class="dot dot-three">.</span>
    </h4>
    <div class="slider__container">
      <div class="slide">
        <div class="content">
          <h2>Reading (Code)</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores blanditiis expedita cumque,
            cupiditate et esse labore? Modi id temporibus dolores ratione beatae, dignissimos doloribus
            reprehenderit!
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h2>Naturing</h2>
          <p>
            Yes, I know I made a word up. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maiores blanditiis expedita cumque,
            cupiditate et esse labore? Modi id temporibus dolores ratione beatae, dignissimos doloribus
            reprehenderit!
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h2>Reading (Books) </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores blanditiis expedita cumque,
            cupiditate et esse labore? Modi id temporibus dolores ratione beatae, dignissimos doloribus
            reprehenderit!
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h2>Exploring New Music</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores blanditiis expedita cumque,
            cupiditate et esse labore? Modi id temporibus dolores ratione beatae, dignissimos doloribus
            reprehenderit!
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h2>Napping</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores blanditiis expedita cumque,
            cupiditate et esse labore? Modi id temporibus dolores ratione beatae, dignissimos doloribus
            reprehenderit!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
      // background-color: #1a2934;
      cursor: pointer;

      &:nth-child(1) {
        background-image: url(../assets/img/pankaj-patel-SXihyA4oEJs-unsplash.jpg);
        background-size: cover;
        background-position: top center;
      }

      &:nth-child(2) {
        background-image: url(../assets/img/annie-spratt-KCQz_b2Hgi8-unsplash.jpg);
        background-position: center center;
      }

      &:nth-child(3) {
        background-image: url(../assets/img/annie-spratt--9vMBjrU-RA-unsplash.jpg);
        background-position: top center;
      }
      &:nth-child(4) {
        background-image: url(../assets/img/brett-jordan-IjKEHs3JtK4-unsplash.jpg);
        background-size: cover;
        background-position: center center;
      }
      &:nth-child(5) {
        background-image: url(../assets/img/julian-hochgesang--Wd8gStxy3s-unsplash.jpg);
        background-size: cover;
        background-position: top center;
      }

      // &:hover, used to be this.
      &.open {
        -webkit-box-flex: 5;
        -ms-flex-positive: 5;
        flex-grow: 5;

        & .content {
          visibility: visible;
          opacity: 1;
          -webkit-transition: 0.5s;
          transition: 0.5s;
          -webkit-transition-delay: 0.5s;
          transition-delay: 0.5s;
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
      }

      .content {
        position: absolute;
        bottom: 0;
        margin: 40px;
        padding: 30px;
        background-color: #000;
        color: #fff;
        visibility: hidden;
        opacity: 0;
        -webkit-transform: translateY(100px);
        transform: translateY(100px);
        -webkit-transition: 0s;
        transition: 0s;
      }
    }
  }
}
</style>