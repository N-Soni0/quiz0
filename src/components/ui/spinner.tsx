import React from 'react';
import { ImSpinner8 } from 'react-icons/im';
import { twMerge } from 'tailwind-merge';

type Props = {
	className?: string;
	[key: string]: any;
};

const Spinner = ({ className, ...props }: Props) => {
	return (
		<ImSpinner8
			className={twMerge('h-4 w-4 animate-spin', className)}
			{...props}
		/>
	);
};

export default Spinner;
