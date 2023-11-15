export const testTopics = [
	'ai',
	'math',
	'cinema',
	'games',
	'blockchain',
] as const;

export const testTopicsNames: Record<(typeof testTopics)[number], string> = {
	ai: 'Artificial Intelligence',
	math: 'Math',
	cinema: 'Cinema',
	games: 'Games',
	blockchain: 'Blockchain',
};
