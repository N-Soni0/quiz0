import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

type Props = {
	title: string;
	content: string;
	icon: React.ReactNode;
	children?: React.ReactNode;
};

const FeatureCard = ({ title, content, children, icon }: Props) => {
	return (
		<li className='border flex items-center p-4 justify-between relative bg-card rounded-lg duration-200 text-foreground shadow-sm h-[5.2rem]'>
			<div className='flex items-center gap-3'>
				<div className='bg-primary flex items-center justify-center w-12 h-12 rounded-sm'>
					{icon}
				</div>
				<div className='max-w-[70%]'>
					<h3 className='text-lg whitespace-nowrap'>{title}</h3>
					<p className='text-xs opacity-60 '>{content}</p>
				</div>
			</div>

			<div className='flex gap-3 items-center'>
				{children}
			</div>
		</li>
	);
};

export default FeatureCard;
