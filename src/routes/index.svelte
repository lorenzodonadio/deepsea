<script lang="ts">
	import MainBanner from '$lib/components/carousels/MainBanner';
	import TranslucidBox from '$lib/components/containers/TranslucidBox';
	import MainNavBar from '$lib/components/navbars/MainNavBar';

	let y = 0;
</script>

<svelte:window bind:scrollY={y} />
<div class="relative  h-full w-full bg-gradient-to-tr to-[#35A7D3] via-[#0A406A] from-[#011029]">
	<!-- Nav bar -->
	<MainNavBar />
	<div id="wrapper" class="mx-[10px] sm:mx-[50px]  ">
		<!--Main Banners-->
		<div class="mt-[30px] snap-start ">
			<h2 class=" font-semibold text-center mb-[15px] mx-auto text-white text-xs sm:text-4xl  ">
				SATROCKS revient le 7 Octobre 2022 pour sa XIV edition
			</h2>
			<!--Banner-->
			<MainBanner />

			<p class="mt-[5px] text-center text-white text-[5px] sm:text-xl">
				19h00 : Ouverture des portes - 20h00 : Début des concerts - 02h30 : Fin de la Musique -
				03h00 : Fermeture des portes
			</p>
		</div>
		<!-- Artists -->
		<div
			id="accordion-color"
			data-accordion="collapse"
			data-active-classes="bg-transparent"
			class="sm:mx-[0px] mt-[70px] sm:mt-[100px] snap-start  sm:space-y-3"
		>
			<!-- Primero -->
			<h2 id="accordion-color-heading-1" class="h-[50px]  text-white">
				<button
					type="button"
					class="flex items-center justify-between w-full font-medium text-left"
					data-accordion-target="#accordion-color-body-1"
					aria-expanded="true"
					aria-controls="accordion-color-body-1"
				>
					<span class="font-bold text-2xl sm:text-5xl">SCENE SAT</span>
				</button>
			</h2>
			<div id="accordion-color-body-1" class="" aria-labelledby="accordion-color-heading-1">
				<div class="">DATA</div>
			</div>
			<!-- Segundo -->
			<h2 id="accordion-color-heading-2" class="h-[50px]   text-white">
				<button
					type="button"
					class="flex items-center justify-between w-full font-medium text-left text-gray-500"
					data-accordion-target="#accordion-color-body-2"
					aria-expanded="false"
					aria-controls="accordion-color-body-2"
				>
					<span class="font-bold text-2xl sm:text-5xl">SCENE UNDERGROUND</span>
				</button>
			</h2>
			<div id="accordion-color-body-2" class="hidden" aria-labelledby="accordion-color-heading-2">
				<div class="">DATA</div>
			</div>
			<!-- Tercero -->
			<h2 id="accordion-color-heading-3" class=" text-white">
				<button
					type="button"
					class="flex items-center justify-between w-full  font-medium text-left text-gray-500 "
					data-accordion-target="#accordion-color-body-3"
					aria-expanded="false"
					aria-controls="accordion-color-body-3"
				>
					<span class="font-bold text-2xl sm:text-5xl">SCENE CHILL</span>
				</button>
			</h2>
			<div id="accordion-color-body-3" class="hidden" aria-labelledby="accordion-color-heading-3">
				<div class=" ">DATA</div>
			</div>
		</div>

		<!-- BILLETTERIE -->

		<div class="mt-[60px] snap-start">
			<h1 class="font-bold text-[42px] sm:text-[90px] text-[#1170AA]">BILLETTERIE</h1>
			<div
				id="prices"
				class="space-y-3 sm:space-y-0 sm:space-x-10 mx-auto sm:mx-[0%] w-[100%] sm:flex mt-[10px] sm:mt-[15px] "
			>
				<TranslucidBox styles="sm:mx-0 sm:w-[700px] sm:h-[200px] h-[100px]">
					<div class="sm:m-[40px] ">
						<h1 class="font-bold text-white text-left text-3xl sm:text-5xl ">15.- CHF</h1>
						<p class="text-white mt-[1px] sm:mt-[8px] sm:text-xl">Plein tarif</p>
					</div>
				</TranslucidBox>

				<TranslucidBox styles="sm:mx-0 sm:w-[700px] sm:h-[200px] h-[100px]">
					<div class="sm:m-[40px] ">
						<h1 class="font-bold text-white text-left text-3xl sm:text-5xl ">10.- CHF</h1>
						<p class="text-white mt-[1px] sm:mt-[8px] sm:text-xl">
							Sur présentation de la carte Sat à I’entrée
						</p>
					</div>
				</TranslucidBox>
			</div>

			<div id="buyPlaces" class="mt-[10px] text-white sm:mt-[18px]">
				<p>
					Vous pouvez acheter des places:
					<br />
					- en ligne, sur le site Petzi
					<br />
					- chez l'un des points de vente Petzi
					<br />
					- à Satellite entre 11h et 14h ou à semaine des associations jusqu'a soldout!
				</p>
			</div>
		</div>

		<div id="Information" class="snap-start pb-5 mt-[30px] space-y-3 ">
			<h1 class="font-bold text-[42px] sm:text-[90px] text-[#0A4979]">INFORMATION</h1>

			<div class="sm:flex sm:flex-row sm:space-x-10 sm:pb-[900px]">
				<!-- fist 2 info -->
				<div class="space-y-3 sm:w-[70%]">
					<TranslucidBox styles="text-white">
						<div class="p-2">
							<h1 class="sm:text-5xl mb-[10px]">Title</h1>
							<p class="sm:text-4xl">
								<span>Entrée et sécurité</span>: Sont strictement interdits à l'intérieur du
								festival : les objets dangereux, les liquides, boissons, gourdes, bouteilles et
								autres contenants—même vides—venant de l'extérieur.
								<br />
								<span>Jeune public</span>: L'entrée au festival est interdite aux personnes de moins
								de 16 ans non-accompagnées d'un parent ou d'une personne adulte responsable.
								<br />
								<span>Attention</span>: toute sortie du site est définitive !
							</p>
						</div>
					</TranslucidBox>

					<TranslucidBox styles="text-white ">
						<h1 class="sm:text-5xl mb-[10px]">Acces au Festival</h1>
						<p class="sm:text-4xl">
							<span>Venez en transports publics!</span>
							<br />
							Métro M1 : Arrêt EPFL.
							<br />
							Bus 31, 105 : Arrêt Blévallaire / Argand.
							<br />
							Bus 701 : Arrêt Pâqueret.
							<br />
							Des <span> navettes retou</span>des TL partiront de l'avenue Picard à<span
								>01h30,02h30</span
							>et<span>03h15</span>.Arrêts : Renens, Malley et Lausanne-Flon.
							<br />
							Attention : Le parking du Rolex Learning Center fermera ses portes à minuit.
						</p>
					</TranslucidBox>
				</div>
				<!--low priority info  -->
				<div class=" space-y-3 sm:h-[300px]">
					<TranslucidBox styles="text-white ">
						<h1 class="lg:text-[40px] sm:text-[40px] mb-[10px]">Title</h1>
					</TranslucidBox>

					<TranslucidBox styles="text-white">
						<h1>Acces au Festival</h1>
					</TranslucidBox>
				</div>
			</div>
		</div>
	</div>
</div>
