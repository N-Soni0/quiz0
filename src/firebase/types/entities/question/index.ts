import { FirebaseEntityType } from '../..';
import {
	MutlipleSelectQuestionAnswer,
	MutlipleSelectQuestion,
} from './multipleSelectQuestion';
import { SelectQuestion, SelectQuestionAnswer } from './selectQuestion';

export type BaseQuestion = {
	id: Id;
	testId: Id;

	type: QuestionType;
	text: string;
};

export type Question = SelectQuestion | MutlipleSelectQuestion;
export type Answer = SelectQuestionAnswer | MutlipleSelectQuestionAnswer;

type MutateQuestion = Omit<BaseQuestion, 'id' | 'type'>;

export type CreateQuestionDoc = MutateQuestion & { [key: string]: any };
export type EditQuestionDoc = Omit<MutateQuestion, 'testId'> & {
	[key: string]: any;
};

export enum QuestionType {
	Select,
	MutlipleSelect,
}
