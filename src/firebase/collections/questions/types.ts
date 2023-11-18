import { Timestamp } from 'firebase/firestore';
import {
	MutlipleSelectQuestionAnswer,
	MutlipleSelectQuestion,
} from './variants/multipleSelectQuestion';
import {
	SelectQuestion,
	SelectQuestionAnswer,
} from './variants/selectQuestion';

export type BaseQuestion = {
	id: Id;

	type: QuestionType;
	text: string;
	createdAt: Timestamp;
	updatedAt: Timestamp;
};

export type Question = SelectQuestion | MutlipleSelectQuestion;
export type Answer = SelectQuestionAnswer | MutlipleSelectQuestionAnswer;

export type QuestionType = 'select' | 'multiple-select';

// Utility types
export type QuestionData<T extends QuestionType> = T extends 'select'
	? SelectQuestion
	: T extends 'multiple-select'
	? MutlipleSelectQuestion
	: never;
