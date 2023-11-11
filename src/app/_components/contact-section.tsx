import { Button } from '@/components/ui/button';
import { BiLogoTelegram } from 'react-icons/bi';
import FeedbackForm from './feedback-form';
import Link from 'next/link';

const ContactSection = () => {
	return (
		<section className='w-full flex justify-between p-4 '>
			<div className='w-[40%]'>
				<h4 className='text text-center mb-5'>Write a message directly</h4>

				<Link href={'https://t.me/anikihref'}>
					<Button className='flex items-center gap-2 mx-auto'>
						<BiLogoTelegram
							className={'text-primary-foreground'}
							size={'1.1rem'}
						/>
						<p className='text-md'>Telegram</p>
					</Button>   
				</Link>
			</div>
			<div className='w-1 h-full flex flex-col justify-between'>
				<div className='w-full h-6 bg-accent'></div>
				<div className='w-full h-6 bg-accent'></div>
				<div className='w-full h-6 bg-accent'></div>
			</div>
			<div className='w-[40%]'>
				<h4 className='text text-center mb-5'>Share your feedback :3</h4>

				<FeedbackForm />
			</div>
		</section>
	);
};

export default ContactSection;
