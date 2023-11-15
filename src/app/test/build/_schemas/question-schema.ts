import { z } from 'zod';

const baseQuestion = {
	title: z.string().min(10),
};

export const SelectQuestionSchema = z
	.object({
		type: z.literal('select'),
		options: z
			.array(
				z.object({
					title: z.string(),
					isCorrect: z.boolean(),
				})
			)

			.min(1)
			.max(6)
			.refine(
				(options) => {
					return options.filter((option) => option.isCorrect).length === 1;
				},
				{ message: 'Only one answer can be correct' }
			),
	})
	.extend(baseQuestion);

export const MultipleSelectQuestionSchema = z
	.object({
		type: z.literal('mutliple-select'),
		options: z.array(
			z.object({
				title: z.string(),
				isCorrect: z.boolean(),
			})
		),
	})

	.extend(baseQuestion)
	.refine(
		(data) => {
			return data.options.filter((option) => option.isCorrect).length > 1;
		},
		{ message: 'More then one answer should be correct' }
	);

export const QuestionSchema = z.union([
	SelectQuestionSchema,
	MultipleSelectQuestionSchema,
]);

export type QuestionSchemaType = z.infer<typeof QuestionSchema>;
export type SelectQuestionShemaType = z.infer<typeof SelectQuestionSchema>;
export type MultipleSelectQuestionShemaType = z.infer<
	typeof MultipleSelectQuestionSchema
>;
