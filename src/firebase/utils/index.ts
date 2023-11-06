import { DocumentSnapshot } from 'firebase/firestore';
import { addDoc } from './addDoc';
import { updateDoc } from './updateDoc';
import { getDoc } from './getDoc';

export const parseFetchedData = (snapshot: DocumentSnapshot) => ({
	...snapshot.data(),
	id: snapshot.id,
});

export { addDoc, updateDoc, getDoc };
