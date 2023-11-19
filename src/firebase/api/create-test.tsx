import { collection, doc, writeBatch } from 'firebase/firestore';
import { AddQuestion } from '../collections/questions';
import { AddTest } from '../collections/tests';
import { firestore } from '..';
import { COLLECTION } from '../constants/collections';
import { toast } from '@/components/ui/use-toast';

export async function createTest(test: AddTest, questions: Array<AddQuestion>) {
	try {
		const batch = writeBatch(firestore);

		const testDoc = doc(collection(firestore, COLLECTION.TESTS));
        console.log(testDoc.id)
		batch.set(testDoc, test);

		questions.forEach((question) => {
			const questionDoc = doc(
				collection(firestore, `${COLLECTION.TESTS}/${testDoc.id}/${COLLECTION.QUESTIONS}`)
			);

			batch.set(questionDoc, question);
		});

		await batch.commit();
	} catch (error) {
        console.log(error)
		toast({
			variant: 'destructive',
			title: 'Uh oh! Something went wrong.',
			description: 'Error creating test :c',
		});
	}
}
