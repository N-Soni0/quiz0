import { z } from 'zod';

const OptionSchema = z.object({
	title: z.string().min(1),
	isCorrect: z.boolean(),
});

export const SelectQuestionSchema = z.object({
	title: z.string().min(2),
	type: z.literal('select'),
	options: z
		.array(OptionSchema)
		.min(1)
		.max(6)
		.refine(
			(options) => {
				return options.filter((option) => option.isCorrect).length === 1;
			},
			{ message: 'Only one answer can be correct' }
		),
});
