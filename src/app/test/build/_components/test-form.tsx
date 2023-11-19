'use client';

import { Input } from '@/components/ui/input';
import { FormProvider, useForm } from 'react-hook-form';
import { TestFormData, testFormSchema } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { testTopics, testTopicsNames } from '@/constants/testTopics';

import QuestionsSection from './questions-section';
import { twMerge } from 'tailwind-merge';
import Spinner from '@/components/ui/spinner';

type Props = {
	onSubmit?: (data: TestFormData) => void;
	className?: string;
};

const TestForm = ({ onSubmit, className }: Props) => {
	const formController = useForm<TestFormData>({
		resolver: zodResolver(testFormSchema),
		defaultValues: {
			title: '',
			topic: 'ai',
			questions: [],
		},
	});
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = formController;
	const questions = formController.watch('questions');

	return (
		<FormProvider {...formController}>
			<Form {...formController}>
				<form
					className={twMerge('px-20 flex flex-col', className)}
					onSubmit={handleSubmit(async (data) => {
						await onSubmit?.(data);

						reset();
					})}
				>
					<div className='flex-1 grid grid-cols-2 gap-10'>
						<div className='flex flex-col '>
							<FormField
								control={control}
								name='title'
								render={({ field }) => (
									<FormItem className='mb-5'>
										<FormLabel>Title</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={control}
								name='topic'
								render={({ field: { onChange, value, ...field } }) => (
									<FormItem className=''>
										<FormLabel>Topic</FormLabel>
										<Select
											onValueChange={onChange}
											value={value}
											{...field}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder='Select topic' />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{testTopics.map((topic) => (
													<SelectItem
														key={topic}
														value={topic}
													>
														{testTopicsNames[topic]}
													</SelectItem>
												))}
											</SelectContent>
										</Select>

										<p className='text-sm font-medium text-destructive'>
											{errors.topic ? 'Select topic from the list' : null}
										</p>
									</FormItem>
								)}
							/>
						</div>

						<QuestionsSection questions={questions} />
					</div>
					<Button
						onClick={() => reset()}
						type='button'
					>
						reset
					</Button>

					<Button
						className=' flex items-center gap-2  mx-auto mt-20'
						size={'lg'}
						type='submit'
						disabled={isSubmitting}
					>
						{isSubmitting && <Spinner className='fill-primary-foreground' />}
						<p>Send</p>
					</Button>
				</form>
			</Form>
		</FormProvider>
	);
};

export default TestForm;
