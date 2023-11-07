import { DocumentSnapshot } from 'firebase/firestore';
import { getDoc } from './getDoc';
import { addDoc } from './addDoc';
import { updateDoc } from './updateDoc';
import { getMultipleDocs } from './getMultipleDocs';

export const parseFetchedData = (snapshot: DocumentSnapshot) => {
	if (!snapshot.exists()) {
		throw new Error(`Doc with path: ${snapshot.ref.path} doesn't exist`);
	}

	return {
		...snapshot.data(),
		id: snapshot.id,
	};
};

export { getDoc, addDoc, updateDoc, getMultipleDocs };
