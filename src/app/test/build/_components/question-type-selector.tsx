import React from 'react';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { questionTypes, questionTypesNames } from '@/constants/questionTypes';

type Props = {
	onSelect: (type: (typeof questionTypes)[number]) => void;
};

const QuestionTypeSelector = ({ onSelect }: Props) => {
	return (
		<Select onValueChange={onSelect}>
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
	);
};

export default QuestionTypeSelector;
