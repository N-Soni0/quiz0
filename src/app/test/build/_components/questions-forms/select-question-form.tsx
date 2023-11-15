import React from 'react';
import { useTestFormContext } from '../../_hooks/use-test-form-context';
import { useFieldArray, useForm, useFormState } from 'react-hook-form';
import { FiMinus } from 'react-icons/fi';
import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
	Form,
	FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { SelectQuestionSchema } from '../../_schemas/question-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Checkbox } from '@/components/ui/checkbox';
import { twMerge } from 'tailwind-merge';
import { DialogClose } from '@/components/ui/dialog';

type Props = {
	index: number;
};

type FormData = z.infer<typeof SelectQuestionSchema>;
const SelectQuestionForm = ({ index }: Props) => {
	const testForm = useTestFormContext();
	const formControls = useForm<FormData>({
		resolver: zodResolver(SelectQuestionSchema),
		mode: 'onChange',
		defaultValues:
			testForm.getValues().questions.at(index)?.type === 'select'
				? (testForm.getValues().questions[index] as FormData)
				: {
						options: [{ isCorrect: false, title: '' }],
						title: '',
						type: 'select',
				  },
	});
	const {
		control,
		watch,
		getValues,
		formState: { isValid },
	} = formControls;
	const { errors } = useFormState({ control });
	const { fields, append, remove } = useFieldArray<FormData>({
		name: `options`,
		control,
	});
	const data = watch();
	const { options } = data;

	return (
		<Form {...formControls}>
			<div>
				<FormField
					control={control}
					name={`title`}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>

							<FormControl>
								<Input
									placeholder='Title'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className='mt-5'>
					<div className=''>
						<FormLabel>Options</FormLabel>
						<FormDescription className='text-xs'>
							You can add up to 6 options with only one correct
						</FormDescription>
					</div>

					<div className='pl-5 grid grid-cols-2 gap-x-4 gap-y-2 mt-3'>
						{options.length < 6 && (
							<div className='p-2 border-2 border-dashed flex items-center justify-center rounded-lg'>
								<Button
									variant={'secondary'}
									onClick={() => {
										append({ isCorrect: false, title: '' });
									}}
								>
									+ Option
								</Button>
							</div>
						)}
						{fields.map(({ id }, optionIndex) => (
							<div
								key={id}
								className={twMerge(
									'p-2  rounded-lg border-2 border-dashed',
									options[optionIndex].isCorrect && 'bg-accent'
								)}
							>
								<FormLabel className='flex  items-center gap-2'>
									<p>Option №{optionIndex + 1}</p>

									<Button
										disabled={fields.length === 1}
										onClick={() => {
											remove(optionIndex);
										}}
										variant={'ghost'}
										size={'icon'}
										className='w-8 h-8'
									>
										<FiMinus />
									</Button>
								</FormLabel>

								<div className='flex items-center gap-3 mt-1.5'>
									<FormField
										control={control}
										name={`options.${optionIndex}.isCorrect`}
										render={({ field }) => (
											<FormItem className=''>
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={(e) => {
															field.onChange(e);
														}}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={control}
										name={`options.${optionIndex}.title`}
										render={({ field }) => (
											<FormItem className=''>
												<FormControl>
													<Input
														placeholder='Title'
														{...field}
													/>
												</FormControl>
												<FormMessage className='text-[0.7rem]' />
											</FormItem>
										)}
									/>
								</div>
							</div>
						))}
					</div>
				</div>

				<DialogClose asChild>
					<Button
						disabled={!isValid}
						className='mt-5'
						onClick={async () => {
							testForm.setValue(`questions.${index}`, data)
						}}
					>
						Save
					</Button>
				</DialogClose>
			</div>
		</Form>
	);
};

export default SelectQuestionForm;
