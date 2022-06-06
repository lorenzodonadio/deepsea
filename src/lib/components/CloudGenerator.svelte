<script lang="ts">
	import Cloud from '$lib/components/svg/Cloud.svelte';

	let cloudNumber = 20;

	interface Cloud {
		n: number;
		w: number;
		top: number;
		left: number;
		id: number;
	}

	let clouds: Cloud[] = [];

	for (let i = 0; i < cloudNumber; i++) {
		clouds.push({
			n: getRandomInt(1, 4),
			w: getRandomInt(15, 80),
			top: getRandomInt(0, 80),
			left: getRandomInt(-30, 110),
			id: i
		});
	}

	/* setTimeout(() => {
		clouds.map((c) => (c.left = '0vh'));
	}, 1000); */
	/* 	let interval = setInterval(() => {
            time += 1;
            clouds = [
                ...clouds,
                { w: `${getRandomInt(50, 100)}px`, top: `${getRandomInt(0, 80)}vh`, id: time }
            ];
        }, 1000); */

	function getRandomInt(min: number, max: number) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
	}
</script>

<!--  w={c.w} id={c.id} top={c.top} -->
{#each clouds as c (c.id)}
	<Cloud {...c} />
{/each}
