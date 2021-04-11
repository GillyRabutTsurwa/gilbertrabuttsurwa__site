<template>
  <div class="showcase-container__item">
    <div class="showcase-container-x">
      <img v-bind:src="thumbnailObj.img" class="container__img" alt="x">
    </div>
    <div class="showcase-container-y">
      <a v-bind:href="thumbnailObj.siteLink" target="_blank" class="card__button first">Link to Website
        <i class="devicon-devicon-plain"></i>
      </a>
      <a v-bind:href="thumbnailObj.githubLink" target="_blank" class="card__button first">Link to Code
        <i class="devicon-github-plain"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thumbnailObj: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.showcase-container {
  &__item {
    position: relative;

    &:hover .showcase-container-x {
      -webkit-filter: blur(7px);
      filter: blur(7px);
    }

    &:hover .showcase-container-y {
      opacity: 1;
      visibility: visible;
    }
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

  .container__img {
    width: 100%;
    height: 100%;
  }

  .card__button {
    display: inline-block;
    font-size: 3rem;

    color: rgb(45, 119, 231);
    font-size: 1.6rem;
    text-decoration: none;
    border-bottom: 1px solid rgb(45, 119, 231);
    padding: 3px;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;

    &:hover {
      background-color: rgb(45, 119, 231);
      color: #fff;
      border-bottom: 1px solid #fff;
    }
  }
}
</style>