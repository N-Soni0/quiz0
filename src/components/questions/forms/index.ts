import { z } from 'zod';
import {
	SelectQuestionForm,
	SelectQuestionSchema,
} from './select-question-form';
import {
	MultipleSelectQuestionForm,
	MultipleSelectQuestionSchema,
} from './multiple-select-question-form';
import QuestionForm from './question-form';


const QuestionSchema = z.union([
	SelectQuestionSchema,
	MultipleSelectQuestionSchema,
]);


// Forms Export
export { SelectQuestionForm, MultipleSelectQuestionForm, QuestionForm };

// Schemas Export
export { QuestionSchema, SelectQuestionSchema, MultipleSelectQuestionSchema };
