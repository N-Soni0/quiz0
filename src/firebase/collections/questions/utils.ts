import { getDoc, addDoc, getMultipleDocs, updateDoc } from '@/firebase/utils';
import { BaseQuestion, Question } from './types';
import { QueryConstraint } from 'firebase/firestore';

type MutableData = Omit<BaseQuestion, 'id' | 'type'>;

type QuestionsCollectionPath = `/tests/${Id}/questions`;
type QuestionDocumentPath = `${QuestionsCollectionPath}/${Id}`;

export const getQuestionDoc = (path: QuestionDocumentPath) =>
	getDoc<QuestionDocumentPath, Question>(path);

export const getMultipleQuestionDocs = (
	path: QuestionsCollectionPath,
	...queries: Array<Maybe<QueryConstraint>>
) => getMultipleDocs<QuestionsCollectionPath, Question>(path, ...queries);

type AddMutableData = MutableData & { [key: string]: any };
export const addQuestionDoc = (
	path: QuestionsCollectionPath,
	data: AddMutableData
) => addDoc<QuestionsCollectionPath, AddMutableData>(path, data);

type UpdateMutableData = Partial<
	Omit<MutableData, 'testId'> & {
		[key: string]: any;
	}
>;
export const updateQuestionDoc = (
	path: QuestionDocumentPath,
	data: UpdateMutableData
) => updateDoc<QuestionDocumentPath, UpdateMutableData>(path, data);

