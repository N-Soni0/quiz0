import {
	collection,
	getDocs,
	query as firestoreQuery,
	QueryConstraint,
} from 'firebase/firestore';
import { firestore } from '..';
import { parseFetchedData } from '.';

export async function getMultipleDocs<
	TPath extends string,
	TReturn extends object
>(
	path: TPath,
	...queries: Array<Maybe<QueryConstraint>>
): Promise<Maybe<TReturn[]>> {
	try {
		queries = queries.filter((query) => !!query);
		const collectionRef = collection(firestore, path);

		const query = firestoreQuery(
			collectionRef,
			...(queries as QueryConstraint[])
		);
		const result = await getDocs(query);

		return result.docs
			.map(parseFetchedData)
			.filter((data) => !!data) as TReturn[];
	} catch (error) {
		console.error(
			`Could not read multiple documents from collection: ${path}`,
			error
		);
	}
}
