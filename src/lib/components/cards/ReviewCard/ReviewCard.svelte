<script lang="ts">
	import ReadMore from '$lib/components/text/ReadMore';

	export let id: string;
	export let title: string;
	export let src: string;
</script>

<li {id} class="relative shrink-0 snap-center">
	<img {title} {src} alt={title} class="rounded-3xl h-[260px] w-[260px] " />
	<div class="mx-auto text-center w-[250px]">
		<h1 class="text-xl font-bold mt-[10px]  ">Kolinga</h1>
		<p class="text-base italic font-medium mb-[10px]">
			<span>music gender</span>
			<br />
			<span>time</span>
		</p>
		<ReadMore
			textContent={'Gipsy Tonic est un quintet basé à Lausanne composé de deux guitaristes, dun bassiste, dun violoniste et dune chanteuse bassoniste. Dinfluences bien différentes mélangeant rock, jazz ou classique, les membres se réunissent en 2016 d’abord en quartet autour'}
			textStyles="text-base text-start"
			maxWords={20}
		/>
	</div>
</li>
