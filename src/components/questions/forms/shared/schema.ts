import { z } from "zod";

export const BaseQuestionSchema = z.object({
    title: z.string().min(1)
})