import { z } from 'zod';
import { BaseQuestionSchema } from '../shared/schema';

const OptionSchema = z.object({
	text: z.string().min(1),
	isCorrect: z.boolean(),
});

export const MultipleSelectQuestionSchema = z
	.object({
		type: z.literal('multiple-select'),
		options: z.array(OptionSchema).min(1).max(6)
		.refine(
			(options) => {
				return options.filter((option) => option.isCorrect).length >= 1;
			},
			{ message: 'One or more options should be correct' }
		),
	})
	.extend(BaseQuestionSchema)
	
