'use client';

import { useUser } from '@clerk/nextjs';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const ProfileLink = () => {
	const { user } = useUser();

	return (
		<Button
			variant={'ghost'}
			className='h-fit'
		>
			<Link
				href={'/profile'}
				className='flex items-center gap-3'
			>
				<h4>{user?.username}</h4>
				<Avatar>
					<AvatarImage src={user?.imageUrl} />
					<AvatarFallback>{user?.username?.[0]}</AvatarFallback>
				</Avatar>
			</Link>
		</Button>
	);
};

export default ProfileLink;
