import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { FiGithub } from 'react-icons/fi';

const developers: { username: string }[] = [
	{ username: 'N-Soni0' },	
];

const TeamTab = () => {
	return (
		<div className='flex flex-col justify-center'>
			<h3 className='text-center font-bold text-xl'>Developers Team</h3>
			<ul className='flex justify-center flex-wrap w-full gap-4 mt-6'>
				{developers.map(({ username }) => (
					<li
						key={username}
						className='flex-1 flex flex-col items-center justify-center w-full max-w-[50%]'
					>
						<div className='flex items-center mb-2 gap-2'>
							<Avatar>
								<AvatarImage
									src={`https://github.com/${username}.png`}
									alt='@shadcn'
								/>
								<AvatarFallback>{username[0]}</AvatarFallback>
							</Avatar>
							<h4 className='text-bold text-center text-lg mb-1'>{username}</h4>
						</div>

						<Link
							className='w-full'
							href={`https://github.com/${username}`}
							target='_blank'
						>
							<Button className='w-full'>
								<div className='flex items-center gap-3'>
									<FiGithub />

									<h5>GitHub</h5>
								</div>
							</Button>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TeamTab;
