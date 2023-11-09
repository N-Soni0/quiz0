import TabsSection from './_components/tabs-section';

export default function Home() {
	return (
		<main className='grid grid-cols-2 flex-1 h-full'>
			<div className='px-12 py-8 h-full flex items-center flex-col justify-center grid-start'>
				<h1 className='text-8xl -translate-y-12 tracking-wide '>Quiz0</h1>
			
			</div>

			<TabsSection />
		</main>
	);
}
