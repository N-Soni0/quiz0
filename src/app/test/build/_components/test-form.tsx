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
	const { control, handleSubmit } = formController;
	const questions = formController.watch('questions');

	return (
		<FormProvider {...formController}>
			<Form {...formController}>
				<form
					className='px-20 h-full '
					onSubmit={handleSubmit(() => {})}
				>
					<div className='grid grid-cols-2 gap-10'>
						<div className='flex flex-col flex-1'>
							<FormField
								control={control}
								name='title'
								render={({ field }) => (
									<FormItem className='flex-1'>
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
									<FormItem className='flex-1'>
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
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<div className='w-full grid justify-center items-center flex-col'>
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
													<p className='whitespace-normal break-all line-clamp-3'>
														{question.text}
													</p>
												</div>
											</div>
										</Button>
									</QuestionDialog>
								))}
							</div>

							<QuestionDialog index={questions.length}>
								<Button>Add</Button>
							</QuestionDialog>
						</div>
					</div>

					<Button type='submit'>Submit</Button>
				</form>
			</Form>
		</FormProvider>
	);
};

export default TestForm;
