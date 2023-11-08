import { shadcnPlugin } from './src/lib/shadcn-plugin';
import { Config } from 'tailwindcss';
import animatePlugin from 'tailwindcss-animate'

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      
    }
  },
	plugins: [animatePlugin, shadcnPlugin],
} satisfies Config;

export default config;