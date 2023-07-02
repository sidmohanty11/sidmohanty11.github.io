/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
			  "2xl": "1400px",
			},
		},
		extend: {},
	},
	plugins: [],
}
