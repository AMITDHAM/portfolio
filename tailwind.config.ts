import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
	theme: {
		screens: {
			'mobile': '560px',

			'tablet': '815px',
			// => @media (min-width: 815px) { ... }
			'ipadSmall':'1000px',
			'ipad':'1100px',
			'laptop': '1180px',
			// => @media (min-width: 1180px) { ... }

			'desktop': '1280px',
			// => @media (min-width: 1280px) { ... }
			'iMac': '1560px',
			// => @media (min-width: 1560px) { ... }
		},
		colors: {
			'body': '#37374E',
			'menubg': '#ecebea',
			'lightgrey': '#ECF1F4',
			'offwhite': '#ddd',
			'light': '#ffffff',
			'dark': '#000',
			'red': '#dd0e32',
			'error': '#dd0e32',
			'transparent': 'transparent',
			'lightdark': '#222',
			'lightranparent': 'rgb(39 25 25 / 20%)',
			'darktranparent': 'rgb(39 25 25 / 50%)',
			'greentransparent': 'rgba(5, 108, 129, 0.8)',
			'success': '#00ac00',
			'successdark': '#017201',
			'primary': '#0C6C81', //rgb(12, 108, 129)
			'primarydark': '#074D5C',
			'secondary': '#BA5803',
			'secondaryOld': '#f08222',
			'secondaryBtnBg': '#f08222', //secondaryOld
			'secondarylight': '#f7a054',
			'secondarydark': '#a74e01',
			'lightgreentransparent': '#DBE9EC', //rgb(219, 233, 236)
			'brightGreen': '#3EB6B8', //rgb(62, 182, 184)
			'gold': '#ffca00', //rgb(255, 202, 0)
			'lightSlate' : '#8C8CA1', //helper text
			'orangeTint': '#FCE6D3', //rgb(252, 230, 211)
			'entry': '#febf35', //rgb(254, 191, 53)
			'experienced': '#59c06e', //rgb(89, 192, 110)
			'mid': '#c65354', //rgb(198, 83, 84)
			'senior': '#746493', //rgb(116, 100, 147)
			'mixed': '#72828f', //rgb(114, 130, 143)
			'na': '#72828f',
		},
		fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
    },
		container: {
			center: true,
		},
		extend: {
			gridColumn: {
				'span-2': 'span 2 / span 2',
			},
			fontSize: {
				'xs': '12px',
				'sm': '14px',
				'base': '16px',
				'lg': '18px',
				'xl': '20px',
				'2xl': '24px',
				'3xl': '30px',
				'4xl': '36px',
				'5xl': '48px',
				'6xl': '60px',
			  },
		},
		cursor: {
			none: 'none',
			pointer: 'pointer',
			grab: 'grab',
		},
	},
  plugins: [],
};
export default config;
