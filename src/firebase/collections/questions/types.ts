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
	testId: Id;

	type: QuestionType;
	text: string;
	createdAt: Timestamp;
	updatedAt: Timestamp;
};

export type Question = SelectQuestion | MutlipleSelectQuestion;
export type Answer = SelectQuestionAnswer | MutlipleSelectQuestionAnswer;


export enum QuestionType {
	Select,
	MutlipleSelect,
}
