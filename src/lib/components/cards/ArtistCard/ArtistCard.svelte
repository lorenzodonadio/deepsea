<script lang="ts">
	import ReadMore from '$lib/components/text/ReadMore';

	interface Data {
		title: string;
		subtitle: string;
		date: string;
		descriptionUp?: string;
		descriptionDown?: string;
		image: string;
	}

	export let data: Data;
</script>

<div class=" w-[500px] bg-white text-center mx-[20px]">
	<!--Card title-->
	<h1 class="font-bold customFont">{data.title}</h1>

	<h2 class="font-bold customFont">{data.subtitle}</h2>

	<h3 class="font-bold customFont">{data.date}</h3>

	<p class={data.descriptionUp ? 'block' : 'hidden'}>{data.descriptionUp}</p>

	<!--Card image -->
	<div>
		<img src={data.image} alt="artista" class="" />
	</div>

	<div class="{data.descriptionDown ? 'block' : 'hidden'} w-[500px] mt-[10px] ">
		<ReadMore
			textContent={data.descriptionDown}
			maxChars={10}
			readMoreLabel="Show more"
			readLessLabel="Show less"
		/>
	</div>
</div>

<style type="text/css" media="screen">
	.customFont {
		letter-spacing: 1px;
	}
</style>
