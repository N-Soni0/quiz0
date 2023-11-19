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
};

export type Question = SelectQuestion | MutlipleSelectQuestion;
export type Answer = SelectQuestionAnswer | MutlipleSelectQuestionAnswer;

export type QuestionType = 'select' | 'multiple-select';

// Types for data mutation 
export type AddQuestion = Omit<BaseQuestion, 'id'> & { [key: string]: any };
export type UpdateQuestion = Partial<Omit<BaseQuestion, 'id' | 'type'> & {
	[key: string]: any;
}>;

// Utility types
export type QuestionData<T extends QuestionType> = T extends 'select'
	? SelectQuestion
	: T extends 'multiple-select'
	? MutlipleSelectQuestion
	: never;
