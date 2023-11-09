'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';
import FeaturesTab from './tabs/features-tab';
import TeamTab from './tabs/team-tab';
import dayjs from 'dayjs';

const TabsSection = () => {
	return (
		<div className='p-5 flex flex-col items-center justify-between '>
			<Tabs
				defaultValue='advantages'
				className='w-[80%]'
			>
				<TabsList className='grid w-full grid-cols-2'>
					<TabsTrigger value='advantages'>Advantages</TabsTrigger>
					<TabsTrigger value='team'>Team</TabsTrigger>
				</TabsList>
				<TabsContent value='advantages'>
					<FeaturesTab />
				</TabsContent>
				<TabsContent value='team'>
					<TeamTab />
				</TabsContent>
			</Tabs>

			<div className='text-center text-5xl mb-10'>
				{dayjs().format('DD MMM, YYYY')}
			</div>
		</div>
	);
};

export default TabsSection;
