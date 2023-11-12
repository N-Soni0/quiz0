import { Button } from '@/components/ui/button';
import { BiLogoTelegram } from 'react-icons/bi';
import FeedbackForm from './feedback-form';
import Link from 'next/link';

const ContactTab = () => {
	return (
		<div className='w-full flex justify-between p-4 '>
			<div className='w-[40%]'>
				<h4 className='text text-center mb-2'>Share feedback with us</h4>

				<FeedbackForm />
			</div>

			<div className='w-1 h-full flex flex-col justify-between'>
				<div className='w-full h-6 bg-accent'></div>
				<div className='w-full h-6 bg-accent'></div>
				<div className='w-full h-6 bg-accent'></div>
			</div>

			<div className='w-[40%]'>
				<h4 className='text text-center mb-2'>Write a message directly</h4>

				<Link
					href={'https://t.me/anikihref'}
					target='_blank'
				>
					<Button className='flex items-center gap-2 mx-auto'>
						<BiLogoTelegram
							className={'text-primary-foreground'}
							size={'1.1rem'}
						/>
						<p className='text-md'>Telegram</p>
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default ContactTab;
