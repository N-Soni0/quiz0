import Link from 'next/link';
import TabsSection from './_components/tabs-section';
import ContactSection from './_components/contact-section';

export default function Home() {
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
				<h1>Quiz</h1>
				<ContactSection />
			</div>
		
			
			<TabsSection />
		</main>
	);
}
