'use client';

import React from 'react';
import TestForm from './_components/test-form';
import { addTestDoc } from '@/firebase/collections/tests';
import { addQuestionDoc } from '@/firebase/collections/questions';

const BuildTest = () => {
	return (
		<div className='container h-full'>
			<h1 className='text-center text-3xl mb-5'>Build Test</h1>

			<TestForm
				onSubmit={async (data) => {
					const testId = await addTestDoc({
						title: data.title,
						topic: data.topic,
					});
					if (!testId) return;

					data.questions.map(async (question) => {
						const questionId = await addQuestionDoc(testId, {
							text: question.text,
							options: question.options,
							type: question.type,
						});

            console.log(questionId)
					});
					console.log(testId);
				}}
			/>
		</div>
	);
};

export default BuildTest;
