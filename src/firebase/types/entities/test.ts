import { FieldValue, Timestamp } from 'firebase/firestore';

export type Test = {
	id: Id;
	title: string;
	createdBy: Id;
	createdAt: Timestamp;
	updatedAt: Timestamp;
};

type MutateTest = Omit<Test, 'id' | 'createdAt' | 'updatedAt'> & {
	createdAt: FieldValue;
	updatedAt: FieldValue;
};

export type CreateTestDoc = Omit<MutateTest, 'createdAt' | 'updatedAt'>;
export type EditTestDoc = Partial<Omit<MutateTest, 'createdAt' | 'updatedAt'>>;
