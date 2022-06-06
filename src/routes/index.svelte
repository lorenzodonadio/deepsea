<script lang="ts">
	import CloudGenerator from '$lib/components/CloudGenerator.svelte';
	import SoundSystem from '$lib/components/SoundSystem.svelte';
	import Island from '$lib/components/svg/Island.svelte';
	import Waves from '$lib/components/Waves.svelte';

	let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<div class="relative  h-full min-h-[3000px]">
	<div class="absolute top-4 w-full flex-col justify-center z-10 px-2">
		<div
			class="mt-16 max-w-3xl mx-auto sm:px-6 lg:px-8 text-center bg-blend-exclusion bg-slate-200 bg-opacity-90 text-gray-700 rounded-2xl h-[500px]"
			style="transform : translate(0,{-y * 5.8}px"
		>
			<h1 class="font-bold">SAT ROCKS</h1>
		</div>

		<div
			class="mt-[550px] max-w-3xl mx-auto sm:px-6 lg:px-8 text-center bg-blend-exclusion bg-slate-200 bg-opacity-90 text-gray-700 rounded-2xl h-[500px]"
			style="transform : translate(0,{-y * 2}px"
		>
			<h1 class="font-bold">SAT ROCKS</h1>
		</div>
	</div>

	<div class="relative h-screen overflow-hidden bg-blue-900">
		<!-- <img class="h-6 absolute top-3 left-3" alt="cloud" src="cloud1.png" />
		<img class="h-16 absolute top-20" style="left:220px" alt="cloud" src="cloud2.png" />
		<img class="h-12 absolute top-32 left-top-32" alt="cloud" src="cloud3.png" /> -->
		<div class="" style="transform : translate(0,{-y * 0.8}px">
			<CloudGenerator />
		</div>

		<div
			class="absolute opacity-80 bottom-8 h-32 left-6"
			style="transform : translate(0,{-y * 0.9}px"
		>
			<Island />
		</div>

		<div class="absolute  bottom-[110px]  left-10" style="transform : translate(0,{-y * 0.9}px">
			<SoundSystem />
		</div>

		<div class="w-full absolute bottom-0 h-28" style="transform : translate(0,{-y * 1}px">
			<Waves />
		</div>
	</div>

	<div
		class="relative h-[700px] bg-gradient-to-t from-blue-400 to-[#6dd0f5]"
		style="transform : translate(0,{-y * 1}px"
	>
		<h1>first layer of sea</h1>
	</div>
</div>
