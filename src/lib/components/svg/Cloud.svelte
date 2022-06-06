<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	export let id: number;
	export let n: number;
	export let w: number;
	export let left: number;
	export let top: number;
	//	const deleteImg = () => img?.parentNode?.removeChild(img);
	//deleteImage = false
	const MIN_SPEED = 1.2;
	const MAX_SPEED = 4;
	let transition = false;
	let speed = Math.random() * (MAX_SPEED - MIN_SPEED) + MIN_SPEED;
	let opacity = Math.random() * (1 - 0.4) + 0.4;

	$: if (left > 120 + MAX_SPEED) {
		transition = false;
		left = -15;
		speed = Math.random() * (MAX_SPEED - MIN_SPEED) + MIN_SPEED;
		top = getRandomInt(0, 80);
		opacity = Math.random() * (1 - 0.4) + 0.4;
		setTimeout(() => (transition = true), 200);
	}

	let i = setInterval(() => (left += speed), 1000);

	onDestroy(() => clearInterval(i));

	function getRandomInt(min: number, max: number) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
	}

	onMount(() => {
		setTimeout(() => (transition = true), 500);
	});
</script>

<!-- in:fly={{ x: -1000, duration: duration }} -->
<img
	id="${id}"
	src="cloud{n}.png"
	alt="cloud"
	class="absolute"
	style="width: {w}px; left:{left}vw ;top:{top}vh; opacity: {opacity};"
	class:img-transition={transition}
/>

<!-- <script>
    img {
        transform:translateX()
    }
</script> -->
<style>
	.img-transition {
		transition-duration: 1s;
		transition-timing-function: linear;
	}
</style>
