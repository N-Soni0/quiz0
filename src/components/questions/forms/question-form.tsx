// @ts-nocheck

import { QuestionType } from '@/firebase/collections/questions';
import React from 'react';
import { z } from 'zod';
import {
	MultipleSelectQuestionSchema,
	SelectQuestionSchema,
	SelectQuestionForm,
	MultipleSelectQuestionForm,
} from '.';

type QuestionShema<T extends QuestionType> = T extends 'select'
	? z.infer<typeof SelectQuestionSchema>
	: T extends 'multiple-select'
	? z.infer<typeof MultipleSelectQuestionSchema>
	: never;

type Props<T extends QuestionType> = {
	type: T;
	initialValues?: Partial<QuestionShema<T>>;
	onSubmit?: (data: QuestionShema<T>) => void;
};

const QuestionForm = function <T extends QuestionType>({
	type,
	initialValues,
	onSubmit,
}: Props<T>) {
	// The dumbass ts cant understand that formsMap is typesafe asf
    // So put noncheck to ignore type errors
	const formsMap: Record<QuestionType, React.JSX.Element> = {
		select: (
            <SelectQuestionForm
				initialValues={initialValues}
				onSubmit={onSubmit}
			/>
		),
		'multiple-select': (
			<MultipleSelectQuestionForm
				initialValues={initialValues}
				onSubmit={onSubmit}
			/>
		),
	};
    
	return formsMap[type];
};

export default QuestionForm;
