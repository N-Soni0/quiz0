import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from '@/components/ui/dialog';
import { questionTypes } from '@/constants/questionTypes';
import React, { useEffect, useState } from 'react';
import { useTestFormContext } from '../_hooks/use-test-form-context';
import QuestionTypeSelector from './question-type-selector';
import { Button } from '@/components/ui/button';
import { FiEye, FiChevronLeft, FiEdit } from 'react-icons/fi';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { QuestionForm, QuestionSchema } from '@/components/questions/forms';
import { z } from 'zod';

type Props = {
	index: number;
	initialValues?: Maybe<z.infer<typeof QuestionSchema>>
	children: React.ReactNode;
};

const QuestionDialog = ({ index, children, initialValues }: Props) => {
	const { setValue } = useTestFormContext();
	const [selectedType, setSelectedType] = useState<
		Maybe<(typeof questionTypes)[number]>
	>(initialValues?.type);

	return (
		<Dialog onOpenChange={(isOpen) => {
			if (isOpen) {
				setSelectedType(initialValues?.type)
			} else {

			}
		}}>
			<DialogTrigger asChild>{children}</DialogTrigger>

			<DialogContent>
				<DialogHeader>Question №{index + 1}</DialogHeader>

				{selectedType ? (
					<div className='w-full h-fit flex items-center justify-between gap-3 mb-2'>
						<Tabs
							defaultValue='edit'
							className='w-full h-fit'
						>
							<div className='flex items-center justify-between gap-5'>
								<TabsList className='grid w-1/2 grid-cols-2'>
									<TabsTrigger value='edit'>
										<FiEdit />
									</TabsTrigger>
									<TabsTrigger
										value='view'
										disabled={!initialValues}
									>
										<FiEye className={'block h-full'} />
									</TabsTrigger>
								</TabsList>
								<Button
									onClick={() => setSelectedType(null)}
									variant={'outline'}
									size={'icon'}
								>
									<FiChevronLeft />
								</Button>
							</div>

							<TabsContent value='edit'>
								<QuestionForm
									type={selectedType}
									initialValues={initialValues ?? {}}
									onSubmit={(data) => {
										setValue(`questions.${index}`, data);
									}}
								/>
							</TabsContent>
							<TabsContent value='view'>question</TabsContent>
						</Tabs>
					</div>
				) : (
					<div className='h-32 flex items-center justify-center'>
						<QuestionTypeSelector onSelect={setSelectedType} />
					</div>
				)}
			</DialogContent>
		</Dialog>
	);
};

export default QuestionDialog;
