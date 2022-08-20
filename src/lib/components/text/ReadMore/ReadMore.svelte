<script lang="ts">
	import { getMaxCharacters, getMaxWords, isFullText } from './utils';
	export let textContent: string;
	export let readMoreLabel = 'Read more';
	export let readLessLabel = 'Read less';
	export let maxChars: number;
	export let maxWords: number;
	export let dotDotDot: string | any = '...';
	export let textStyles: string;

	let text: string;
	let isOpen = false;
	const cleanText = textContent.replace(/\s+/g, ' ').trim();
	$: finalLabel = isOpen ? readLessLabel : readMoreLabel;
	$: maxCharsText = getMaxCharacters(maxChars, isOpen, cleanText, text);
	$: finalText = getMaxWords(maxWords, isOpen, maxCharsText, text);
	$: finalSymbol = isOpen ? '' : dotDotDot;
	$: showButton = !isOpen && isFullText(finalText, cleanText) ? false : true;

	const handleClick = () => {
		isOpen = !isOpen;
	};
</script>

<div data-testid="wrapper">
	<p class={textStyles}>{finalText}</p>
	<span data-testid="button-wrapper" data-visible={`${showButton}`} class="button-wrapper">
		{!isOpen ? finalSymbol : ''}
		<button data-testid="button" on:click={handleClick} class="button">
			{finalLabel}
		</button>
	</span>
</div>

<style>
	/* custom styles */
	.button-wrapper {
		white-space: nowrap;
		margin-left: -4px;
	}
	span[data-visible='false'] {
		visibility: hidden;
	}
	.button {
		border: 0;
		background-color: transparent;
		text-decoration: underline;
		cursor: pointer;
	}
	.button::first-letter {
		text-transform: uppercase;
	}
	.button:hover {
		text-decoration: none;
	}
</style>
