import { Timestamp } from 'firebase/firestore';

export type Test = {
	id: Id;
	title: string;
	createdBy: Id;
	createdAt: Timestamp;
	updatedAt: Timestamp;
};

