import React from 'react';
import { useFieldArray, useForm, useFormState } from 'react-hook-form';
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
import { zodResolver } from '@hookform/resolvers/zod';
import { DialogClose } from '@/components/ui/dialog';
import SelectOption from './select-option';
import { SelectQuestionSchema } from './schema';

type FormData = z.infer<typeof SelectQuestionSchema>;
type Props = {
	initialValues?: Partial<FormData>;
	onSubmit?: (data: FormData) => void;
};

const SelectQuestionForm = ({ initialValues, onSubmit }: Props) => {
	const formControls = useForm<FormData>({
		resolver: zodResolver(SelectQuestionSchema),
		mode: 'onChange',
		defaultValues: {
			options: [{ isCorrect: false, title: '' }],
			title: '',
			type: 'select',
			...initialValues,
		},
	});
	const {
		control,
		watch,
		formState: { isValid },
	} = formControls;
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
							<SelectOption
								key={id}
								control={control}
								index={optionIndex}
								isSelected={data.options[optionIndex].isCorrect}
								disableRemove={fields.length === 1}
								onRemove={() => remove(optionIndex)}
							/>
						))}
					</div>
				</div>

				<DialogClose asChild>
					<Button
						disabled={!isValid}
						className='mt-5'
						onClick={async () => {
							onSubmit?.(data);
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
