<div id="animation-carousel" class="relative flex flex-col" data-carousel="static">
	<!-- Carousel wrapper -->
	<div
		class="relative h-56 overflow-hidden rounded-[20px] w-[95%] sm:w-[75%] mx-auto sm:h-[500px] "
	>
		<div
			class="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-0 z-20"
			data-carousel-item="active"
		>
			<img
				src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
				class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
				alt="..."
			/>
		</div>
		<!-- Item 4 -->
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
		<!-- Item 5 -->
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
	<!-- Slider controls -->
</div>
