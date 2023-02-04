<template>
  <section class="proficiency">
    <h2 class="proficiency__title">Skills</h2>
    <div class="proficiency__text">
      <p>
        I am adept in some technologies whereas I am still learning others. My strong points include: <span class="lang-in-bold"><span class="css">CSS</span>/<span class="sass">Sass</span></span>, <span class="lang-in-bold javascript">JavaScript</span>, <span class="lang-in-bold vue">VueJS</span>, and <span class="lang-in-bold svelte">Svelte</span>. I am also gradually improving my skills with: <span class="lang-in-bold react">React</span>, <span class="lang-in-bold typescript">TypeScript</span>, and <span class="lang-in-bold webpack">Webpack</span>.
      </p>
      <p>
        I also have adequate experience using css frameworks, such as <span class="lang-in-bold bootstrap">Bootstrap</span> and <span class="lang-in-bold tailwind">Tailwind</span> (which is my preferred one). I also have adept skills with GulpJS and Git/GitHub for front-end workflow and version control respectively, which, along with all the other technologies I've learnt, have given me the skills to make cool projects
      </p>
    </div>
    <div class="proficiency__chart">
      <div class="proficiency__chart--container">
        <canvas id="myFirstChart"></canvas>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Troisieme",
  data() {
    return {};
  },
  methods: {
    renderChart() {
      const chart = document.getElementById("myFirstChart").getContext("2d");
      let myChart = new Chart(chart, {
        type: "radar",
        data: {
          labels: ["CSS/Sass", "Javascript", "Typescript", "Vue", "React", "Svelte", "Tailwind", "Bootstrap", "Gulp", "Webpack"],

          datasets: [
            {
              label: "Skill Levels",
              data: [84, 77, 49, 75, 45, 68, 60, 42, 60, 46],
              backgroundColor: "rgba(26, 41, 52, 0.5)",
            },
          ],
          borderColor: "red",
        },
        options: {
          scale: {
            ticks: {
              display: true,
              // Voila. I've found at how to get rid of that square background of the numbers. It's the backdropColor property under ticks, under options and you assign it a colour. I just did it to transparent
              //TODO: Make sure to add this in your chartjs learning repo.
              // * So glad I found it
              backdropColor: "transparent",
              fontColor: "rgba(26,41,52,0.6)",

              beginAtZero: true,
              max: 100,
            },
            pointLabels: {
              fontSize: 14, // fontSize is ok
              // don't know if i like it with or without
              //fontColor: "#1a2934", // fontColor is accessible
              fontFamily: "'Jost', 'sans-serif'",
            },
          },
        },
      });
    },
  },
  mounted() {
    this.renderChart();
  },
};
</script>

<style lang="scss">
.proficiency {
  display: grid;
  // grid-template-columns: repeat(2, 1fr);
  grid-template-columns: 35% 1fr;
  grid-template-rows: min-content 1fr;
  background-color: $default-grey;

  @include responsive(tablet-portrait) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
  }

  &__title {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    text-align: center;
    font-size: 5rem;
  }

  &__text {
    font-size: 2rem;
    margin-top: 12rem;
    margin-left: 4rem;
    line-height: 2;
    grid-column: 1 / 2;
    grid-row: 2 / -1;

    @include responsive(tablet-portrait) {
      margin: 2.5rem 0 0 2.5rem;
      font-size: 3rem;
    }
  }

  &__chart {
    &--container {
      position: relative;
      margin: 10rem 0;
      // margin-right: -8rem;
      width: 100%;
      grid-column: 2 / -1;
      grid-row: 2 / -1;

      #myFirstChart {
        display: block;
        width: 92rem;
        height: 47rem;
      }
    }
  }
}

.lang-in-bold {
  font-weight: bolder;

  .css {
    @extend %text-gradient;
    background-image: linear-gradient($colour-gradient-css);
  }

  .sass {
    @extend %text-gradient;
    background-image: linear-gradient($colour-gradient-sass);
  }

  &.javascript {
    @extend %text-gradient;
    background-image: linear-gradient($colour-gradient-javascript);
  }

  &.vue {
    @extend %text-gradient;
    background-image: linear-gradient($colour-gradient-vue);
  }

  &.svelte {
    @extend %text-gradient;
    background-image: linear-gradient($colour-gradient-svelte);
  }

  &.tailwind {
    @extend %text-gradient;
    background-image: linear-gradient($colour-gradient-tailwind);
  }

  &.react {
    @extend %text-gradient;
    background-image: linear-gradient($colour-gradient-react);
  }

  &.typescript {
    @extend %text-gradient;
    background-image: linear-gradient($colour-gradient-typescript);
  }

  &.bootstrap {
    @extend %text-gradient;
    background-image: linear-gradient($colour-gradient-bootstrap);
  }

  &.webpack {
    @extend %text-gradient;
    background-image: linear-gradient($colour-gradient-webpack);
  }
}
</style>