import { z } from 'zod';
import { createUnionSchema } from '@/lib/zod/zodCreateManyUnion'
import { testTopics } from '@/constants/testTopics';
import { QuestionSchema } from '@/components/questions/forms';

const TopicShema = createUnionSchema(testTopics);

export const testFormSchema = z.object({
	title: z.string().min(2),
	topic: TopicShema,
	questions: z.array(QuestionSchema),
});

export type TestFormData = z.infer<typeof testFormSchema>;
