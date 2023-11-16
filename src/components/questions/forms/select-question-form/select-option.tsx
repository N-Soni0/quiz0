import { Button } from '@/components/ui/button';
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { FiMinus } from 'react-icons/fi';
import { Control } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { SelectQuestionSchema } from '..';

type AcceptableControl = Omit<
	z.infer<typeof SelectQuestionSchema>,
	'type'
>;

type Props<T extends AcceptableControl> = {
	control: Control<T>;
	index: number;
	isSelected: boolean;
	onRemove?: () => void;
	disableRemove?: boolean;
};

const SelectOption = function <T extends AcceptableControl>({
	isSelected,
	onRemove,
	disableRemove = false,
	control,
	index,
}: Props<T>) {
	return (
		<div
			className={twMerge(
				'p-2  rounded-lg border-2 border-dashed',
				isSelected && 'bg-accent'
			)}
		>
			<FormLabel className='flex  items-center gap-2'>
				<p>Option №{index + 1}</p>

				<Button
					disabled={disableRemove}
					onClick={() => {
						onRemove?.();
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
					control={control as Control<AcceptableControl>}
					name={`options.${index}.isCorrect`}
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
					control={control as Control<AcceptableControl>}
					name={`options.${index}.title`}
					render={({ field }) => (
						<FormItem className=''>
							<FormControl>
								<Input
									placeholder='Title'
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
			</div>
		</div>
	);
};

export default SelectOption;
