<script>
	let showMusicPlayer = false;
</script>

<iframe
	class:-translate-x-96={!showMusicPlayer}
	title="musicplayer"
	width="100%"
	height="166"
	scrolling="no"
	frameborder="no"
	allow="autoplay"
	src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/777120694&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
/>
{#if showMusicPlayer}
	<div
		style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"
	>
		<a
			href="https://soundcloud.com/serum"
			title="Serum"
			target="_blank"
			style="color: #cccccc; text-decoration: none;">Serum</a
		>
		·
		<a
			href="https://soundcloud.com/serum/all-ganja-man"
			title="All Ganja Man"
			target="_blank"
			style="color: #cccccc; text-decoration: none;">All Ganja Man</a
		>
	</div>
{/if}
<button>
	<img
		on:click={() => (showMusicPlayer = !showMusicPlayer)}
		class="h-14 hover:opacity-100 hover:h-16"
		src="sound_system.png"
		alt="sound"
	/>
</button>
