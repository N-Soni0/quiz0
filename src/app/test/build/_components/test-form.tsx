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
import QuestionDialog from './question-dialog';
import { QUESTIONS_DISPLAY_TEXT } from '@/constants/questions';

const TestForm = () => {
	const formController = useForm<TestFormData>({
		resolver: zodResolver(testFormSchema),
		defaultValues: {
			questions: [],
		},
	});
	const { control, handleSubmit, formState: { errors } } = formController;
	const questions = formController.watch('questions');

	return (
		<FormProvider {...formController}>
			<Form {...formController}>
				<form
					className='px-20 h-full flex flex-col'
					onSubmit={handleSubmit(() => {})}
				>
					<div className='grid grid-cols-2 gap-10'>
						<div className='flex flex-col '>
							<FormField
								control={control}
								name='title'
								render={({ field }) => (
									<FormItem className='mb-5'>
										<FormLabel>Title</FormLabel>
										<FormControl>
											<Input
												placeholder='title'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={control}
								name='topic'
								render={({ field }) => (
									<FormItem className=''>
										<FormLabel>Topic</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
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

						<div className='w-full flex justify-center items-center flex-col'>
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

							<QuestionDialog index={questions.length}>
								<Button variant={'secondary'} className='w-[30%]'>Add</Button>
							</QuestionDialog>
						</div>
					</div>

					<Button className='block mx-auto mt-20' size={'lg'} type='submit'>Submit</Button>
				</form>
			</Form>
		</FormProvider>
	);
};

export default TestForm;
