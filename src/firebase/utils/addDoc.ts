import { collection, addDoc as firestoreAddDoc } from 'firebase/firestore';
import { CollectionPath, FirebaseEntityType } from '../types';
import { CreateQuestionDoc } from '../types/entities/question';
import { CreateTestDoc } from '../types/entities/test';
import { firestore } from '..';

type FirebaseCreateDoc<T extends FirebaseEntityType> =
	T extends FirebaseEntityType.Test
		? CreateTestDoc
		: T extends FirebaseEntityType.Question
		? CreateQuestionDoc
		: never;

export async function addDoc<T extends FirebaseEntityType>(
	path: CollectionPath<T>,
	data: FirebaseCreateDoc<T>
): Promise<Maybe<Id>> {
	try {
		const docRef = collection(firestore, path);

		const result = await firestoreAddDoc(docRef, data);
		return result.id;
	} catch (error) {
		console.log(`Error adding document to collection: ${path}`);
	}
}
