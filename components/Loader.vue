<template>
  <div class="loader">
    <i v-bind:class="`devicon-${randomIconIndex}`"></i>
  </div>
</template>

<script>
export default {
    data() {
        return {
            iconArray: [
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
                "gulp-plain"
	        ]
        }
    },
    computed: {
        randomIconIndex: function() {
            return this.iconArray[Math.floor(Math.random() * this.iconArray.length)]
        }
    }
};
</script>

<style>
</style>