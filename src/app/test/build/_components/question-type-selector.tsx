import React from 'react';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { QuestionType } from '@/firebase/collections/questions';
import { QUESTIONS_DISPLAY_TEXT } from '@/constants/questions';


type Props = {
	onSelect: (type: QuestionType) => void;
};

const QuestionTypeSelector = ({ onSelect }: Props) => {
	return (
		<Select onValueChange={onSelect}>
			<SelectTrigger className='w-[180px] '>
				<SelectValue placeholder='Question Type' />
			</SelectTrigger>
			<SelectContent>
				{Object.entries(QUESTIONS_DISPLAY_TEXT).map(([type, text]) => (
					<SelectItem
						key={type}
						value={type}
					>
						{text}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};

export default QuestionTypeSelector;
