export const getMaxCharacters = (
	maxCharacters: number,
	isOpen: boolean,
	children: any,
	text: string
) => {
	if (maxCharacters) {
		if (isOpen) {
			text = children;
		} else {
			text = children.substring(0, maxCharacters);
		}
		return text;
	} else {
		return children;
	}
};

export const isFullText = (truncatedText: any, text: any) => {
	return (
		truncatedText &&
		truncatedText.split('').filter((c: any) => c !== ' ').length ===
			text.split('').filter((c: any) => c !== ' ').length
	);
};

export const getMaxWords = (maxWords: any, isOpen: any, children: any, text: any) => {
	if (maxWords) {
		if (isOpen) {
			text = children;
		} else {
			const words = children.split(' ').filter((c: any) => c !== '');
			text = words.slice(0, maxWords).join(' ');
		}
		return text;
	} else {
		return children;
	}
};
