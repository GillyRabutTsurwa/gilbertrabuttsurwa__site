<script setup>
const props = defineProps({
  thumbnail: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="showcase-item">
    <div class="showcase-item-x">
      <img :src="thumbnail.img" class="item__img" alt="x" />
    </div>
    <div class="showcase-item-y">
      <a :href="thumbnail.siteLink" target="_blank" rel="noreferrer" class="card__button first">Link to Website
        <i class="devicon-devicon-plain" />
      </a>
      <a :href="thumbnail.githubLink" target="_blank" rel="noreferrer" class="card__button first">Link to Code
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
      color: $colour-secondary;
      font-size: 1.6rem;
      text-decoration: none;
      border-bottom: 1px solid $colour-secondary;
      padding: 3px;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
    }

    &:hover,
    &:active {
      background-color: $colour-secondary;
      color: $colour-primary;
      border-bottom: 1px solid $colour-primary;
    }
  }
}
</style>
