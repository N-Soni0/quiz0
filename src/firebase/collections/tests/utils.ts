import { getDoc, addDoc, getMultipleDocs, updateDoc } from '@/firebase/utils';
import { Test } from './types';
import { QueryConstraint } from 'firebase/firestore';

type TestsCollectionPath = '/tests';
type TestDocumentPath = `${TestsCollectionPath}/${Id}`;

type MutableData = Omit<Test, 'id' | 'createdAt' | 'updatedAt'>;

export const getTestDoc = (testId: Id) =>
	getDoc<TestDocumentPath, Test>(`/tests/${testId}`);

export const getMultipleTestDocs = (
	...queries: Array<Maybe<QueryConstraint>>
) => getMultipleDocs<TestsCollectionPath, Test>('/tests', ...queries);

export const addTestDoc = (data: MutableData) =>
	addDoc<TestsCollectionPath, MutableData>('/tests', data);

type EditMutableData = Partial<Omit<MutableData, 'createdBy'>>;
export const updateTestDoc = (testId: Id, data: EditMutableData) =>
	updateDoc<TestDocumentPath, EditMutableData>(`/tests/${testId}`, data);
