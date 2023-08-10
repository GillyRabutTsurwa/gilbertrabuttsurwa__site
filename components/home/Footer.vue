<template>
  <footer class="footer">
    <div class="follow">
      <h6>You can follow me on:</h6>
      <ul class="follow__list">
        <li class="follow__list--item">
          <a href="https://www.facebook.com/rabuttsurwa/" target="_blank" rel="noreferrer">
            <i class="fa fa-facebook" aria-hidden="true" />
          </a>
        </li>
        <li class="follow__list--item">
          <a href="https://www.instagram.com/rabuttsurwa96/" target="_blank" rel="noreferrer">
            <i class="fa fa-instagram" aria-hidden="true" />
          </a>
        </li>
        <li class="follow__list--item">
          <a href="https://twitter.com/GTsurwa" target="_blank" rel="noreferrer">
            <i class="fa fa-twitter" aria-hidden="true" />
          </a>
        </li>
        <li class="follow__list--item">
          <a href="https://www.linkedin.com/in/gilberttsurwa/" target="_blank" rel="noreferrer">
            <i class="fa fa-linkedin" aria-hidden="true" />
          </a>
        </li>
        <li class="follow__list--item">
          <a href="https://dev.to/gillyrabuttsurwa" target="_blank" rel="noreferrer">
            <i class="fab fa-dev" />
          </a>
        </li>
      </ul>
    </div>
    <div class="other">
      <h6>You can also checkout my:</h6>
      <ul class="other__list">
        <li class="other__list--item">
          <a href="https://open.spotify.com/user/tsurwagilly" target="_blank" rel="noreferrer">
            <i class="fa fa-spotify" aria-hidden="true" />
          </a>
        </li>
        <li class="other__list--item">
          <a href="https://bandcamp.com/gtsurwa" target="_blank" rel="noreferrer">
            <i class="fa fa-bandcamp" aria-hidden="true" />
          </a>
        </li>
        <li class="other__list--item">
          <a href="https://soundcloud.com/tsurwagilly" target="_blank" rel="noreferrer">
            <i class="fa fa-soundcloud" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>
    <h6 class="website-version">v2.0 - February 2023</h6>
  </footer>
</template>

<style lang="scss">
.footer {
  background-color: #1a2934;
  color: rgb(238, 238, 238);
  height: 20vh;
  padding: 2rem;
  font-size: 2.5rem;

  & .follow,
  & .other {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    ul {
      list-style-type: none;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;

      li {
        margin: 0 1.25rem;

        a {

          &:link,
          &:visited {
            color: rgb(238, 238, 238);
          }

          &:hover,
          &:active {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.651), 0 0 10px rgba(255, 255, 255, 0.555), 2px 2px 2px rgba(206, 89, 55, 0);
          }
        }
      }
    }
  }

  & .follow {
    &__list {
      &--item {}
    }
  }

  & .other {
    &__list {
      &--item {
        margin: 0 1rem;
      }
    }
  }

  .website-version {
    text-align: center;
    margin-top: 1.3rem;
  }
}</style>
