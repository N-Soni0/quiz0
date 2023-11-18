import { Timestamp } from 'firebase/firestore';

export type TestTopic = 'ai' | 'math' | 'cinema' | 'games' | 'blockchain';
export type Test = {
	id: Id;
	title: string;
	topic: TestTopic;
	createdBy: Id;
	
	createdAt: Timestamp;
	updatedAt: Timestamp;
};
