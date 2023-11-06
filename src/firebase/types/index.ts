export enum FirebaseEntityType {
	Test = 'tests',
	Question = 'questions',
}

export type DocPath<T extends FirebaseEntityType> =
	`${CollectionPath<T>}/${Id}`;
export type CollectionPath<T extends FirebaseEntityType> =
	T extends FirebaseEntityType.Test
		? '/tests'
		: T extends FirebaseEntityType.Question
		? `/tests/${Id}/questions`
		: never;




