'use client';

import { SignOutButton, SignUpButton, useUser } from '@clerk/nextjs';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const ProfileLink = () => {
	const { user, isSignedIn } = useUser();

	return isSignedIn ? (
		<Button
			variant={'ghost'}
			className='h-fit'
		>
			<Link
				href={'/profile'}
				className='flex items-center gap-3'
			>
				<h4 className='text-foreground'>{user?.username}</h4>
				<Avatar>
					<AvatarImage src={user?.imageUrl} />
					<AvatarFallback>{user?.username?.[0]}</AvatarFallback>
				</Avatar>
			</Link>
		</Button>
	) : (
		<Button>
			<SignUpButton />
		</Button>
	);
};

export default ProfileLink;
