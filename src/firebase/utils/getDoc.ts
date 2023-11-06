import { doc, getDoc as firestoreGetDoc } from 'firebase/firestore';
import { DocPath, FirebaseEntityType } from '../types';
import { firestore } from '..';
import { parseFetchedData } from '.';
import { Test } from '../types/entities/test';
import { Question } from '../types/entities/question';

type FirebaseDoc<T extends FirebaseEntityType> =
	T extends FirebaseEntityType.Test
		? Test
		: T extends FirebaseEntityType.Question
		? Question
		: never;

export async function getDoc<T extends FirebaseEntityType>(
	path: DocPath<T>
): Promise<Maybe<FirebaseDoc<T>>> {
	try {
		const docRef = doc(firestore, path);

		const result = await firestoreGetDoc(docRef);
		return parseFetchedData(result) as FirebaseDoc<T>;
	} catch (error) {
		console.log(`Error getting document by path: ${path}`);
	}
}
