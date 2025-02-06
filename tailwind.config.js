/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			textSans: ['ui-sans-serif'],
		},
		extend: {
			colors: {
				rosa: '#CC0088',
				colorCuerpo: '#16191d',
				diaColor: '#F9FAFBA6',
				colorOpciones: '#868e96',
			},
			width: {
				tamañoCuerpo: '740px', 
			},
		},
	},
	  
};
