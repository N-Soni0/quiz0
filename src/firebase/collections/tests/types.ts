
export type TestTopic = 'ai' | 'math' | 'cinema' | 'games' | 'blockchain';
export type Test = {
	id: Id;
	title: string;
	topic: TestTopic;
	createdBy: Id;
};

export type AddTest = Omit<Test, 'id'>;
export type UpdateTest = Partial<Omit<Test, 'id' | 'createdBy'>>;