'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type NavLink = {
	title: string;
	href: string;
};

const navLinks: Array<NavLink> = [
	{
		href: '/tests',
		title: 'Tests',
	},
	{
		href: '/faq',
		title: 'FAQ',
	},
];

const HeaderNavBar = () => {
	const pathname = usePathname();

	return (
		<nav className='absolute max-w-[300px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
			<ul className='flex gap-x-5'>
				{navLinks.map(({ href, title }) => {
					const isActive = pathname.startsWith(href);

					return (
						<li key={href}>
							<Link
								href={href}
								className={twMerge(
									`relative w-fit text-foreground block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-0 after:hover:w-full after:duration-300`,
									isActive ? `after:w-full` : ''
								)}
							>
								{title}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default HeaderNavBar;
