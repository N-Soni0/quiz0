import { z } from 'zod';

export const BaseQuestionSchema = {
	text: z.string().min(1).max(180),
};
