<script>
  import Map from "$lib/components/Map.svelte";

  /**
   * @type {string}
   */
  let status;
  const test = (/** @type {{ detail: { status: any; }; }} */ e) => {
    console.log(e.detail.status);
    status = e.detail.status ? "Enabled" : "Disabled";
  };
</script>

<!-- <div style="display: flex; justify-content: center; align-items: center; margin-bottom: 3rem;"> -->
<h2>Gil's Favourite Spots</h2>
<span class:hide={!status}>Scroll {status}</span>
<!-- </div> -->

<Map on:scrollStatus={test} />

<style lang="scss">
  h2 {
    text-align: center;
    font-size: 3rem;
    margin-right: 2rem;
  }
  span {
    display: inline-block;
    // width: 20rem;
    border: 2px solid #000;
    border-radius: 1rem;
    font-size: 1.5rem;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    padding: 1.5rem 3rem;
    margin: 2rem auto;
    background-color: $steelblue;
    cursor: not-allowed;
    opacity: 1;
    transition: opacity 0.5s ease-in;

    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .hide {
    visibility: hidden;
    opacity: 0;
  }
</style>
