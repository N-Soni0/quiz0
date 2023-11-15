import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from '@/components/ui/dialog';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { questionTypes, questionTypesNames } from '@/constants/questionTypes';
import React, { useState } from 'react';
import SelectQuestionForm from './select-question-form';
import MutlipleSelectQuestionForm from './mutliple-select-question-form';

type Props = {
	index: number;
};

const QuestionForm = ({ index }: Props) => {
	const [selectedType, setSelectedType] =
		useState<Maybe<(typeof questionTypes)[number]>>(null);

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className='w-full'>Add</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>Add question №{index + 1}</DialogHeader>

				{selectedType ? (
					<div>
						{selectedType === 'select' ? (
							<SelectQuestionForm index={index} />
						) : selectedType === 'multiple-select' ? (
							<MutlipleSelectQuestionForm />
						) : null}

						{/* <Button onClick={() => setSelectedType(null)}>reset</Button> */}
					</div>
				) : (
					<div className='h-32 flex items-center justify-center'>
						<Select
							onValueChange={(type: (typeof questionTypes)[number]) =>
								setSelectedType(type)
							}
						>
							<SelectTrigger className='w-[180px] '>
								<SelectValue placeholder='Question Type' />
							</SelectTrigger>
							<SelectContent>
								{questionTypes.map((type) => (
									<SelectItem
										key={type}
										value={type}
									>
										{questionTypesNames[type]}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				)}
			</DialogContent>
		</Dialog>
	);
};

export default QuestionForm;
