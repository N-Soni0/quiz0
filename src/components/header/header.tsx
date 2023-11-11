import Link from 'next/link';
import HeaderNavBar from './header-nav-bar';
import ProfileLink from './profile-link';
import ThemeSwitch from './theme-switch';
import Image from 'next/image';
import Logo from '../logo';

const Header = () => {

	return (
		<div className='h-24'>
			<div className='flex relative justify-between items-center container h-full'>
				<Link href={'/'} className='text-4xl font-bold'>
					<Logo className='w-40 fill-primary' />
				</Link>

				<HeaderNavBar />

				<div className='flex items-center gap-3'>
					<ThemeSwitch />
					<ProfileLink />
				</div>
			</div>
		</div>
	);
};

export default Header;
