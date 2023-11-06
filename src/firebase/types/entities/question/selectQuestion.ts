import { BaseQuestion, QuestionType } from ".";

export type SelectQuestion = BaseQuestion & {
    // Sepcify distinct type
    type: QuestionType.Select;

    options: Array<{
        text: string;
        isCorrect: boolean; // Only 1 option must be true
    }>
}

export type SelectQuestionAnswer = string; // Options text