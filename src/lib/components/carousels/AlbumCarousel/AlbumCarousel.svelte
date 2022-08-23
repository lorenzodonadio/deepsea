<!--TODO fix-->
<script>
	//agregar lista para lad fotos como import
	/*
    {
    title:string
    genders:string
    time:string
    info:string
    image:string
    }
 /*/

	import TranslucidBox from '$lib/components/containers/TranslucidBox';
	import ReadMore from '$lib/components/text/ReadMore';
	const text = [
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker in',
		'p rueba2',
		'p rueba3'
	];
	let counter = 0;
	let album1 = '';
	let album2 = 'hidden';
	let album3 = 'hidden';

	function increment() {
		if (counter <= 2) {
			counter += 1;
		}
		if (counter > 2) {
			counter = 0;
		}
	}

	function decrement() {
		if (counter >= 0) {
			counter -= 1;
		}
		if (counter < 0) {
			counter = 2;
		}
	}

	$: if (counter == 0) {
		album1 = '';
		album2 = 'hidden';
		album3 = 'hidden';
	} else if (counter == 1) {
		album1 = 'hidden';
		album2 = '';
		album3 = 'hidden';
	} else if (counter == 2) {
		album1 = 'hidden';
		album2 = 'hidden';
		album3 = '';
	}
</script>

<!--I know this si an atrosity  -->

<div class="relative flex">
	<!--Text wrapper  -->
	<div class="w-[40%] static">
		<div class="">
			<TranslucidBox styles="">
				<!--album 1-->
				<span class="{album1} ">
					<h1>Title</h1>
					<p>
						<span>music gender</span>
						<br />
						<span>time</span>
					</p>
					<ReadMore textContent={text[0]} maxWords={30} />
				</span>
				<!--album2-->
				<span class={album2}>
					<ReadMore textContent={text[1]} maxWords={1} />
				</span>
				<!-- album3 -->
				<span class={album3}>
					<ReadMore textContent={text[2]} maxWords={1} />
				</span>
			</TranslucidBox>
		</div>
	</div>
	<!-- Carousel wrapper -->
	<div
		id="animation-carousel"
		class="relative right-0 overflow-hidden rounded-3xl w-[200px] h-[200px]  sm:w-[500px] sm:h-[400px] mx-auto m-auto"
		data-carousel="static"
	>
		<div
			class="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-0 z-20 w-full "
			data-carousel-item="active"
		>
			<img
				src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
				class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
				alt="..."
			/>
		</div>
		<!-- Item 1 -->
		<div
			class="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-full z-10"
			data-carousel-item=""
		>
			<img
				src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
				class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
				alt="..."
			/>
		</div>
		<!-- Item 2 -->
		<div
			class="hidden duration-200 ease-linear absolute inset-0 transition-all transform"
			data-carousel-item=""
		>
			<img
				src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
				class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
				alt="..."
			/>
		</div>

		<button
			type="button"
			class="absolute left-0 z-50 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
			data-carousel-prev=""
			on:click={decrement}
		>
			<span
				class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
			>
				<svg
					aria-hidden="true"
					class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					/></svg
				>
				<span class="sr-only">Previous</span>
			</span>
		</button>
		<button
			type="button"
			class="absolute right-0  z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
			data-carousel-next=""
			on:click={increment}
		>
			<span
				class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
			>
				<svg
					aria-hidden="true"
					class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5l7 7-7 7"
					/></svg
				>
				<span class="sr-only">Next</span>
			</span>
		</button>
	</div>
</div>
