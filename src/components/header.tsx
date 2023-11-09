'use client';

import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';

const Header = () => {
	const { user } = useUser();

	return (
		<div className='h-20'>
			<div className='flex justify-between items-center container h-full'>
				<div className='text-4xl font-bold'>Logo</div>

				<nav>
					<ul className='flex gap-x-5'>
						<li>
							<Link
								href={'/'}
								className={`relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-0 after:hover:w-full after:duration-300`}
							>
								Home
							</Link>
						</li>

						<li>
							<Link
								href={'/tests'}
								className={`relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-0 after:hover:w-full after:duration-300`}
							>
								Tests
							</Link>
						</li>
					</ul>
				</nav>

				<Button
					variant={'ghost'}
					className='h-fit'
				>
					<Link href={'/profile'} className='flex items-center gap-3'>
						<h4>{user?.username}</h4>
						<Avatar>
							<AvatarImage src={user?.imageUrl} />
							<AvatarFallback>{user?.username?.[0]}</AvatarFallback>
						</Avatar>
					</Link>
				</Button>
			</div>
		</div>
	);
};

export default Header;
