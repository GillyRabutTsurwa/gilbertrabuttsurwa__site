<script setup>
const currentDate = new Date();
const birthday = new Date("1996-05-09"); //NOTE: american format is Javascript's default
// thanks to this link: https://stackoverflow.com/questions/10008050/get-age-from-birthdate
const age = Math.floor((currentDate - birthday) / 31557600000);

let photoIndex = 0;

const props = defineProps({ blok: Object });
console.log(props.blok);

const richTextOne = computed(() => {
    return renderRichText(props.blok.paraOne);
})

const richTextTwo = computed(() => {
    return renderRichText(props.blok.paraTwo);
})

onMounted(() => {
    console.log(richTextOne.value)
})

// 
</script>

<template>
<section class="columns">
    <div class="columns__box">
        <div class="columns__box--front">
            <h3 class="columns__title">Who I am</h3>
        </div>
        <div class="columns__box--back">
            <h4 class="columns__subtitle">Developer / Designer</h4>
            <p class="columns__text">
                Proficient front-end web developper - who is also learning web design. I am currently an intern
                for Aeonnova Consulting Company. Have a look at my projects and see what I have made thus far.
            </p>
        </div>
    </div>
    <div class="columns__box">
        <div class="columns__box--front">
            <h3 class="columns__title">What I do</h3>
        </div>
        <div class="columns__box--back">
            <h4 class="columns__subtitle">Everything Front-End</h4>
            <p class="columns__text">
                I specialise in front-end development - although I do know some back-end - and am beginning to
                hone my craft in UI/UX design, particulary for websites and web applications. VueJS is my
                framework of choice.
            </p>
        </div>
    </div>
    <div class="columns__box">
        <div class="columns__box--front">
            <h3 class="columns__title">What I use</h3>
        </div>
        <div class="columns__box--back">
            <h4 class="columns__subtitle">My Tools</h4>
            <ul class="columns__list">
                <li class="columns__list--item">Sass</li>
                <li class="columns__list--item">Tailwind</li>
                <li class="columns__list--item">Bootstrap</li>
                <li class="columns__list--item">Materialize</li>
            </ul>
            <ul class="columns__list">
                <li class="columns__list--item">Webpack</li>
                <li class="columns__list--item">Axios</li>
                <li class="columns__list--item">Node (NPM)</li>
                <li class="columns__list--item">Jest</li>
                <li class="columns__list--item">Gulp</li>
            </ul>
            <ul class="columns__list">
                <li class="columns__list--item">Vue</li>
                <li class="columns__list--item">Svelte</li>
            </ul>
        </div>
    </div>
</section>
</template>

<style lang="scss">
.columns {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    height: 100vh; 

    &__box {
		position: relative;
		width: 100%;
		height: 100%;

		&:hover &--front {
			opacity: 0;
		}
		&:hover &--back {
			opacity: 1;
		}

		&--front,
		&--back {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;

			display: -webkit-box;

			display: -ms-flexbox;

			display: flex;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;

			// TESTING:
			-webkit-transition: all 0.3s ease;
			transition: all 0.3s ease;
		}

		&--front {
			font-family: inherit;
			text-transform: uppercase;
			font-weight: bold;
		}
		&--back {
			opacity: 0;
			background-color: #1a2934;
			color: #fff;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			-ms-flex-direction: column;
			flex-direction: column;

			padding: 0 2rem;
		}
	}

	&__list {
		list-style: none;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		font-size: 3.5rem;

		&--item {
			margin: 1.25rem;
		}
	}
}
</style>
