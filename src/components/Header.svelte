<script>
	import Slide from "./Slide.svelte";

	let slideIndex = undefined;

	const switchBlock = () => {
		if (slideIndex === 0 || slideIndex === undefined) {
			slideIndex = 1;
		} else {
			slideIndex = 0;
		}
	};

	setInterval(switchBlock, 6000);
</script>

<div class="wrapper">
	<Slide
		src="/assets/1.png"
		text="Global inequality"
		hide={slideIndex !== undefined ? slideIndex !== 0 : null}
		show={slideIndex !== undefined ? slideIndex === 0 : null}
		isVisible={true}
	/>
	<Slide
		src="/assets/2.jpg"
		text="1980 ― 2024"
		hide={slideIndex !== 1}
		show={slideIndex === 1}
	/>
</div>

<style>
	.wrapper {
		position: relative;
		height: 100vh;
	}
</style>
