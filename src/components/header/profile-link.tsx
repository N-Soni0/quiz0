'use client';

import { SignUpButton, useUser } from '@clerk/nextjs';
import { Button } from '../ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
	Dialog,
	DialogFooter,
	DialogHeader,
	DialogTrigger,
	DialogClose,
	DialogContent,
	DialogTitle,
} from '../ui/dialog';
import ProfileDialogContent from './profile-dialog-content';

const ProfileLink = () => {
	const { user, isSignedIn } = useUser();

	return isSignedIn ? (
		<Dialog>
			<DialogTrigger>
				<Button
					variant={'ghost'}
					className='flex items-center gap-3 h-fit'
				>
					<h4 className='text-foreground'>{user?.username}</h4>
					<Avatar>
						<AvatarImage src={user?.imageUrl} />
						<AvatarFallback>{user?.username?.[0]}</AvatarFallback>
					</Avatar>
				</Button>
			</DialogTrigger>

			<DialogContent className='sm:max-w-md'>
				<DialogHeader>
					<DialogTitle>Account Settings</DialogTitle>
				</DialogHeader>

				<ProfileDialogContent />

				<DialogFooter className='sm:justify-start'>
					<DialogClose asChild>
						<Button
							type='button'
							variant='secondary'
						>
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	) : (
		<Button>
			<SignUpButton />
		</Button>
	);
};

export default ProfileLink;
