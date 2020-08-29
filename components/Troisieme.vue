<template>
  <section class="proficiency">
    <div class="proficiency__text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus dignissimos dolore voluptate
      aut totam veritatis voluptatem qui magni ipsum quidem in consequuntur voluptatum omnis, nihil ab vitae.
      Alias, voluptatibus quisquam quae ratione eum temporibus. Fugiat ipsum fuga magni. Explicabo!
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
            label: "Comfort Levels",
            data: [84, 73, 49, 67, 45, 58, 68, 42, 60, 46],
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
  grid-template-columns: repeat(2, 1fr);

  &__text {
    font-size: 2rem;
    margin-top: 5rem;
    margin-left: 2rem;
    line-height: 2;
  }

  &__chart {
    &--container {
      position: relative;
      margin: 5rem 0;
      margin-right: -8rem; /* Genius */
      width: 80vw;

      #myFirstChart {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>