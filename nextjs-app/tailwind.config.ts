import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
    darkMode: ["class"],
    content: [
    "./sanity/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem'
  	},
  	extend: {
  		boxShadow: {
  			layer: '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
  		},
  		colors: {
  			black: '#0d0e12',
  			white: '#fff',
  			cyan: {
  				'50': '#e7fefe',
  				'100': '#c5fcfc',
  				'200': '#96f8f8',
  				'300': '#62efef',
  				'400': '#18e2e2',
  				'500': '#04b8be',
  				'600': '#037782',
  				'700': '#024950',
  				'800': '#042f34',
  				'900': '#072227',
  				'950': '#0d181c'
  			},
  			gray: {
  				'50': '#f6f6f8',
  				'100': '#eeeef1',
  				'200': '#e3e4e8',
  				'300': '#bbbdc9',
  				'400': '#9499ad',
  				'500': '#727892',
  				'600': '#515870',
  				'700': '#383d51',
  				'800': '#252837',
  				'900': '#1b1d27',
  				'950': '#13141b'
  			},
  			red: {
  				'50': '#fff6f5',
  				'100': '#ffe7e5',
  				'200': '#ffdedc',
  				'300': '#fdada5',
  				'400': '#f77769',
  				'500': '#ef4434',
  				'600': '#cc2819',
  				'700': '#8b2018',
  				'800': '#4d1714',
  				'900': '#321615',
  				'950': '#1e1011'
  			},
  			orange: {
  				'50': '#fcf1e8',
  				'100': '#f9e3d2',
  				'200': '#f4c7a6',
  				'300': '#efab7a',
  				'400': '#ea8f4e',
  				'500': '#e57322',
  				'600': '#ba5f1e',
  				'700': '#8f4b1b',
  				'800': '#653818',
  				'900': '#3a2415',
  				'950': '#251a13'
  			},
  			yellow: {
  				'50': '#fefae1',
  				'100': '#fcf3bb',
  				'200': '#f9e994',
  				'300': '#f7d455',
  				'400': '#f9bc15',
  				'500': '#d28a04',
  				'600': '#965908',
  				'700': '#653a0b',
  				'800': '#3b220c',
  				'900': '#271a11',
  				'950': '#181410'
  			},
  			green: {
  				'50': '#e7f9ed',
  				'100': '#d0f4dc',
  				'200': '#a1eaba',
  				'300': '#72e097',
  				'400': '#43d675',
  				'500': '#3ab564',
  				'600': '#329454',
  				'700': '#297343',
  				'800': '#215233',
  				'900': '#183122',
  				'950': '#14211a'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-graphik)',
  				'Arial',
  				'sans-serif'
  			],
  			primary: [
  				'var(--font-graphik)',
  				'Arial',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  future: {
    hoverOnlyWhenSupported: true,
  },

  plugins: [typography, require("tailwindcss-motion"), require("tailwindcss-animate")],
} satisfies Config;
