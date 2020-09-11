<template>
  <section class="proficiency">
    <div class="proficiency__text">
      <p>
        I am adept in some technologies whereas I am still learning others. My strong points include: <span class="lang-in-bold">CSS/Sass</span>, <span class="lang-in-bold">JavaScript</span>, <span class="lang-in-bold">VueJS</span>, <span class="lang-in-bold">Svelte</span>, and <span class="lang-in-bold">Tailwind</span>. I am also becoming increasingly skilled with: <span class="lang-in-bold">React</span>, <span class="lang-in-bold">TypeScript</span>, <span class="lang-in-bold">Bootstrap</span> and <span class="lang-in-bold">Webpack</span>.
      </p>
      <p>
        I have experience with all this technologies and I learn very quickly. Also, I am recently studying <span class="lang-in-bold">UI/UX design</span> with AdobeXD, as I want to master the UI sector of the web as much as possible. Lastly, My researching and problem solving skills have helped me to get comfortable with these technologies and make some cool projects.
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
  methods: {},
  mounted() {
    const chart = document.getElementById("myFirstChart").getContext("2d");

    let myChart = new Chart(chart, {
      type: "radar",
      data: {
        labels: [
          "CSS/Sass",
          "Javascript",
          "Typescript",
          "Vue",
          "React",
          "Svelte",
          "Tailwind",
          "Bootstrap",
          "Gulp",
          "Webpack",
        ],
        datasets: [
          {
            label: "Skill Levels",
            data: [84, 77, 49, 67, 45, 58, 68, 42, 60, 46],
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
};
</script>

<style lang="scss">
.proficiency {
  display: grid;
  // grid-template-columns: repeat(2, 1fr);
  grid-template-columns: 35% 1fr;
  background-color: $default-grey;

  @include responsive(tablet-portrait) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
  }

  &__text {
    font-size: 2rem;
    margin-top: 5rem;
    margin-left: 4rem;
    line-height: 2;

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

      #myFirstChart {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.lang-in-bold {
  font-weight: bolder;
}
</style>