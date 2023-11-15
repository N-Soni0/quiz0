import { z } from 'zod';
import { QuestionSchema } from './question-schema';
import { createUnionSchema } from '@/lib/zod/zodCreateManyUnion'
import { testTopics } from '@/constants/testTopics';

const TopicShema = createUnionSchema(testTopics);

export const testFormSchema = z.object({
	title: z.string().min(2),
	topic: TopicShema,
	questions: z.array(QuestionSchema),
});

export type TestFormData = z.infer<typeof testFormSchema>;
