'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import React, { useState } from 'react';

type Props = {};

const FeedbackForm = (props: Props) => {
	const [value, setValue] = useState('');
	const { toast } = useToast();

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setValue('');

		toast({
			title: 'Your feedback has been sent',
			description: 'Thank you very much, we appreciate it!',
            vairant: 'success'
		});
	};

	return (
		<form
			className='flex gap-2'
			onSubmit={onSubmit}
		>
			<Input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder='Your thoughts...'
			/>

			<Button type='submit' disabled={value.length < 5}>Send</Button>
		</form>
	);
};

export default FeedbackForm;
