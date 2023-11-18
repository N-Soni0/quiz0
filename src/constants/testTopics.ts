import { TestTopic } from "@/firebase/collections/tests/types";

export const testTopics = [
	'ai',
	'math',
	'cinema',
	'games',
	'blockchain',
] as const;

export const testTopicsNames: Record<TestTopic, string> = {
	ai: 'Artificial Intelligence',
	math: 'Math',
	cinema: 'Cinema',
	games: 'Games',
	blockchain: 'Blockchain',
};
