import { BaseQuestion, QuestionType } from '../types';

export type MutlipleSelectQuestion = BaseQuestion & {
	// Sepcify distinct type
	type: QuestionType.MutlipleSelect;

	options: Array<{
		text: string;
		isCorrect: boolean;
	}>;
};

export type MutlipleSelectQuestionAnswer = Array<string>;
