import React from 'react';
import { FiSearch, FiShare2, FiPlus, FiArrowRight } from 'react-icons/fi';
import FeatureCard from './feature-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const FeaturesTab = () => {
	return (
		<div>
			<ul className='flex flex-col gap-y-3 w-full flex-1'>
				<FeatureCard
					title='Create'
					content='Build tests with a hole bunch of different interactive questions'
					icon={<FiPlus size={'1.4rem'} />}
				/>
				<FeatureCard
					title='Find'
					content={
						'We support a rich base of different topics. You are likely to find topic you interested'
					}
					icon={<FiSearch size={'1.4rem'} />}
				>
					<Button
						variant={'outline'}
						size={'icon'}
					>
						<Link href={'/tests'}>
							<FiArrowRight
								size={'1.2rem'}
								className={'text-primary'}
							/>
						</Link>
					</Button>
				</FeatureCard>
				<FeatureCard
					title='Share'
					content='Involve friends and relatives by sharing your test'
					icon={<FiShare2 size={'1.4rem'} />}
				/>
			</ul>
		</div>
	);
};

export default FeaturesTab;
