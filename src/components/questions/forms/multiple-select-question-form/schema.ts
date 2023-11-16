import { z } from 'zod';

const OptionSchema = z.object({
	title: z.string().min(1),
	isCorrect: z.boolean(),
});

export const MultipleSelectQuestionSchema = z
	.object({
		type: z.literal('multiple-select'),
		title: z.string().min(1),
		options: z.array(OptionSchema).min(1).max(6),
	})
	.refine(
		(data) => {
			return data.options.filter((option) => option.isCorrect).length >= 1;
		},
		{ message: 'One or more options should be correct' }
	);
