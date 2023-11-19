import { Button } from '@/components/ui/button';
import { TestFormData } from '../schema';
import QuestionDialog from './question-dialog';
import { QUESTIONS_DISPLAY_TEXT } from '@/constants/questions';

type Props = {
	questions: TestFormData['questions'];
};

const QuestionsSection = ({ questions }: Props) => {
	return (
		<div className='w-full flex items-center flex-col'>
			<QuestionDialog index={questions.length}>
				<Button
					variant={'secondary'}
					className='w-[30%] block mb-5'
				>
					Add
				</Button>
			</QuestionDialog>

			{questions.length === 0 ? (
				<div className='w-full py-2 px-4 flex items-center justify-center bg-muted/50 rounded-lg'>
					No questions yet
				</div>
			) : (
				<div className='w-full grid grid-cols-2 gap-3 mb-3'>
					{questions.map((question, index) => (
						<QuestionDialog
							key={index}
							index={index}
							initialValues={question}
						>
							<Button
								variant={'outline'}
								className='w-full z-0 relative h-fit border-2'
							>
								<div className='w-full text-left '>
									<div className='mb-2 '>
										<h4 className='w-full text-lg font-bold'>
											Question №{index + 1}
										</h4>

										<p className='text-primary/70'>
											{QUESTIONS_DISPLAY_TEXT[question.type]}
										</p>
									</div>

									<div className='w-full justify-between gap-3 items-center'>
										<p className='whitespace-normal h-10 break-all line-clamp-2'>
											{question.text}
										</p>
									</div>
								</div>
							</Button>
						</QuestionDialog>
					))}
				</div>
			)}
		</div>
	);
};

export default QuestionsSection;
