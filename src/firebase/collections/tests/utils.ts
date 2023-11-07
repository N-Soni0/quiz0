import { getDoc, addDoc, getMultipleDocs, updateDoc } from '@/firebase/utils';
import { Test } from './types';
import { QueryConstraint } from 'firebase/firestore';

type TestsCollectionPath = '/tests';
type TestDocumentPath = `${TestsCollectionPath}/${Id}`;

type MutableData = Omit<Test, 'id' | 'createdAt' | 'updatedAt' | 'createdBy'>;

export const getTestDoc = (path: TestDocumentPath) =>
	getDoc<TestDocumentPath, Test>(path);

export const getMultipleTestDocs = (
	path: TestsCollectionPath,
	...queries: Array<Maybe<QueryConstraint>>
) => getMultipleDocs<TestsCollectionPath, Test>(path, ...queries);

export const addTestDoc = (path: TestsCollectionPath, data: MutableData) =>
	addDoc<TestsCollectionPath, MutableData>(path, data);

export const updateTestDoc = (function () {
	return (path: TestDocumentPath, data: Partial<MutableData>) =>
		updateDoc<TestDocumentPath, Partial<MutableData>>(path, data);
})();
