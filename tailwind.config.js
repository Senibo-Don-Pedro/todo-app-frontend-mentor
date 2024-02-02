/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        mobile: '420px',
      },
      colors: {
        custom: {
          BrightBlue: 'hsl(220, 98%, 61%)',

          VeryLightGray: 'hsl(0, 0%, 98%)',
          VeryLightGrayishBlue: 'hsl(236, 33%, 92%)',
          LightGrayishBlue: 'hsl(233, 11%, 84%)',
          DarkGrayishBlue: 'hsl(236, 9%, 61%)',
          VeryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
          VeryDarkBlue: 'hsl(235, 21%, 11%)',
          VeryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
          DMLightGrayishBlue: 'hsl(234, 39%, 85%)',
          DMLightGrayishBlueHover: 'hsl(236, 33%, 92%)',
          DMDarkGrayishBlue: 'hsl(234, 11%, 52%)',
          DMVeryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
          DMVeryDarkGrayishBlue2: 'hsl(237, 14%, 26%)',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
