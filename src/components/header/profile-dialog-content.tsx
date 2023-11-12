'use client';
import React, { useState } from 'react';

import { FiSettings, FiLogOut } from 'react-icons/fi';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { SignOutButton, useUser } from '@clerk/nextjs';
import { Button } from '../ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DialogClose } from '../ui/dialog';

const ProfileDialogContent = () => {
	const { user, isSignedIn } = useUser();

	if (!user) return null;

	return (
		<div className=''>
			<div className='flex items-center justify-between w-full py-5 px-2'>
				<div className='flex items-center gap-2'>
					<Avatar>
						<AvatarImage src={user.imageUrl} />
						<AvatarFallback>
							{`${user.username?.[0]} ${user.username?.[1]}`}
						</AvatarFallback>
					</Avatar>
					<h4>{user.username}</h4>
				</div>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant='outline'
							size={'icon'}
						>
							<FiSettings />
						</Button>
					</DropdownMenuTrigger>

					<DropdownMenuContent>
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<SignOutButton>
									<div className='flex w-full items-center justify-between gap-2'>
										<p>Log out</p>
										<FiLogOut />
									</div>
								</SignOutButton>
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
};

export default ProfileDialogContent;
