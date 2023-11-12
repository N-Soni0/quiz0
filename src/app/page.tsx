import Link from 'next/link';
import TabsSection from './_components/tabs-section';
import Logo from '@/components/logo';
import prisma from '../../prisma/client';

async function addFeedback() {
	return await prisma.feedback.create({
		data: {
			content: `Hello ${new Date()}`,
		},
	});
}

export default async function Home() {

	return (
		<main className='grid relative grid-cols-2 flex-1 h-full'>
			{/* Dashed line */}
			<div className='absolute w-1 h-[95%] left-1/2 -translate-x-1/2 flex flex-col justify-between'>
				<div className='w-full h-16 bg-accent'></div>
				<div className='w-full h-16 bg-accent'></div>
				<div className='w-full h-16 bg-accent'></div>
				<div className='w-full h-16 bg-accent'></div>
				<div className='w-full h-16 bg-accent'></div>
				<div className='w-full h-16 bg-accent'></div>
				<div className='w-full h-16 bg-accent'></div>
			</div>

			<div className='px-12 py-8 h-full flex items-center flex-col justify-between grid-start'>
				<div className='relative -bottom-40'>
					<Logo className='w-60 fill-primary' />
					<p className='text-bold text-sm absolute -right-4 bottom-2'>
						Testing platform
					</p>
				</div>
				
			</div>

			<TabsSection />
		</main>
	);
}
