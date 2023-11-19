'use client';

import React from 'react';
import TestForm from './_components/test-form';
import { createTest } from '@/firebase/api/create-test';
import { useUser } from '@clerk/nextjs';
import { toast, useToast } from '@/components/ui/use-toast';

const BuildTest = () => {
	const { user } = useUser();
	const { toast } = useToast();

	return (
		<div className='container h-full flex flex-col'>
			<h1 className='text-center text-3xl mb-5'>Build Test</h1>

			<TestForm
				className={'flex-1 mb-5'}
				onSubmit={async ({ questions, ...test }) => {
					if (!user) {
						return toast({
							variant: 'destructive',
							title: 'Something went wrong!',
							description: 'You must be signed in to create test',
						});
					}

					await createTest({ createdBy: user.id, ...test }, questions);
				}}
			/>
		</div>
	);
};

export default BuildTest;
