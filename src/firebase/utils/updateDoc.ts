import { doc, updateDoc as firestoreUpdateDoc } from 'firebase/firestore';
import { DocPath, FirebaseEntityType } from '../types';
import { EditQuestionDoc } from '../types/entities/question';
import { EditTestDoc } from '../types/entities/test';
import {  } from './addDoc';
import { firestore } from '..';

type FirebaseEditDoc<T extends FirebaseEntityType> =
	T extends FirebaseEntityType.Test
		? EditTestDoc
		: T extends FirebaseEntityType.Question
		? EditQuestionDoc
		: never;

export async function updateDoc<T extends FirebaseEntityType>(
	path: DocPath<T>,
	data: FirebaseEditDoc<T>
) {
	try {
		const docRef = doc(firestore, path);

		await firestoreUpdateDoc(docRef, data);
	} catch (error) {
		console.error(`Error updating document by path: ${path}, with data ${data}`);
	}
}

