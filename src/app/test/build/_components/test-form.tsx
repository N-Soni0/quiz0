'use client';

import { Input } from '@/components/ui/input';
import { FormProvider, useForm } from 'react-hook-form';
import { TestFormData, testFormSchema } from '../_schemas';
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
import QuestionForm from './questions-forms/question-form';

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

						<div className='w-full'>
							{questions.map(question => (
								<div key={question.title}>{question.title} - {question.type}</div>
							))}
							<QuestionForm index={questions.length} />
						</div>
					</div>

					<Button type='submit'>Submit</Button>
				</form>
			</Form>
		</FormProvider>
	);
};

export default TestForm;
