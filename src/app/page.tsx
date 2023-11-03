import { Button } from '@/components/ui/button';
import { SignUpButton, UserButton } from '@clerk/nextjs';

export default function Home() {
	return (
		<div>
			<UserButton />

			<SignUpButton>
				<Button>Sign up</Button>
			</SignUpButton>
		</div>
	);
}
