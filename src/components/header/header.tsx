import Link from 'next/link';
import HeaderNavBar from './header-nav-bar';
import ProfileLink from './profile-link';
import ThemeSwitch from './theme-switch';

const Header = () => {

	return (
		<div className='h-20'>
			<div className='flex justify-between items-center container h-full'>
				<Link href={'/'} className='text-4xl font-bold'>Logo</Link>

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
