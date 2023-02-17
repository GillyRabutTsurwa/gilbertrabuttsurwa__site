<script>
	import {onMount} from "svelte";
	import Loader from "$lib/components/Loader.svelte";
	import MainContent from "$lib/components/MainContent.svelte";

	const components = [
		{ value: "loader", component: Loader},
		{ value: "main", component: MainContent}
	]

	let currentComponent = components[0];
	onMount(() => {
			setTimeout(() => { 
				currentComponent = components[1];
			 }, 2500); 
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section id="app">
	<svelte:component this={currentComponent.component} />
</section>

<style lang="scss">
#app {
  height: 100%;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.appear-enter-active {
  animation: appear 1s;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}</style>
