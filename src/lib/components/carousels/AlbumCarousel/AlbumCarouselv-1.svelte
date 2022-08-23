<script context="module" lang="ts">
	import type { SvelteComponent } from 'svelte';

	export const getItemId = (index: number, carouselName = 'carousel') =>
		`${carouselName}-item-${index}`;

	export type Item = {
		props: Record<string, any>;
		component: typeof SvelteComponent;
	};
</script>

<script lang="ts">
	import ReadMore from '$lib/components/text/ReadMore';

	export let items: Item[];
</script>

<div class="flex felx-row">
	<div>
		<ReadMore textContent="dfd" />
	</div>

	<ul
		class="flex w-full snap-x snap-mandatory overflow-x-auto  before:shrink-0 after:shrink-0  rounded-xl  "
	>
		{#each items as { props, component }, index}
			<svelte:component this={component} id={getItemId(index)} {...props} />
		{/each}
	</ul>
</div>
