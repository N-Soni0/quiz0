import { getDoc, addDoc, getMultipleDocs, updateDoc } from '@/firebase/utils';
import { BaseQuestion, Question } from './types';
import { QueryConstraint } from 'firebase/firestore';

type MutableData = Omit<
	BaseQuestion,
	'id' | 'type' | 'createdAt' | 'updatedAt'
>;

type QuestionsCollectionPath = `/tests/${Id}/questions`;
type QuestionDocumentPath = `${QuestionsCollectionPath}/${Id}`;

export const getQuestionDoc = ({
	questionId,
	testId,
}: {
	testId: Id;
	questionId: Id;
}) =>
	getDoc<QuestionDocumentPath, Question>(
		`/tests/${testId}/questions/${questionId}`
	);

export const getMultipleQuestionDocs = (
	testId: Id,
	...queries: Array<Maybe<QueryConstraint>>
) =>
	getMultipleDocs<QuestionsCollectionPath, Question>(
		`/tests/${testId}/questions`,
		...queries
	);

type AddMutableData = MutableData & { [key: string]: any };
export const addQuestionDoc = (testId: Id, data: AddMutableData) =>
	addDoc<QuestionsCollectionPath, AddMutableData>(
		`/tests/${testId}/questions`,
		data
	);

type UpdateMutableData = Partial<
	MutableData & {
		[key: string]: any;
	}
>;
export const updateQuestionDoc = (
	{
		questionId,
		testId,
	}: {
		testId: Id;
		questionId: Id;
	},
	data: UpdateMutableData
) =>
	updateDoc<QuestionDocumentPath, UpdateMutableData>(
		`/tests/${testId}/questions/${questionId}`,
		data
	);
