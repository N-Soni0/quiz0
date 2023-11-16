import { BaseQuestion, QuestionType } from "../types";

export type SelectQuestion = BaseQuestion & {
    // Sepcify distinct type
    type: 'select';

    options: Array<{
        text: string;
        isCorrect: boolean; // Only 1 option must be true
    }>
}

export type SelectQuestionAnswer = string; // Options text