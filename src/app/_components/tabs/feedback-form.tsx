'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useUser } from '@clerk/nextjs';
import prisma from '../../../../prisma/client';
import Spinner from '@/components/ui/spinner';
import { Textarea } from '@/components/ui/textarea';

async function addFeedback() {
	await prisma.feedback.create({
		data: {
			content: 'Hello',
		},
	});
}

const FeedbackForm = () => {
	const [value, setValue] = useState('');
	const { toast } = useToast();
	const { user } = useUser();
	const { mutate, isPending } = useMutation({
		mutationFn: async (content: string) =>
			fetch('/api/feedbacks', {
				method: 'POST',
				body: JSON.stringify({
					sender: user?.id,
					content,
				}),
			}),
		onError: (error) => {
			console.error('Error sending feedback', error);
		},
		onSuccess: () => {
			toast({
				title: 'Your feedback has been sent',
				description: 'Thank you very much, we appreciate it!',
			});

			setValue('');
		},
	});

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		mutate(value);
	};

	return (
		<form
			className=''
			onSubmit={onSubmit}
		>
			<Textarea
				
				className='mb-3 resize-none '
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder='Your thoughts...'
			/>

			<Button
				
				type='submit'
				className='flex items-center gap-2 min-w-[100px]'
				disabled={value.length < 5 || isPending}
			>
				{isPending && <Spinner className='fill-primary-foreground' />}
				<p>Send</p>
			</Button>
		</form>
	);
};

export default FeedbackForm;
