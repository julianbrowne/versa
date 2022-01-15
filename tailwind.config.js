const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    screens: {
      xxs: '321px',
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        background: '#FFFFFF',
        primary:
          'hsl(231, 16%, 25%)',
          'background-dark': 'hsl(231, 16%, 25%)',
          'primary-dark': 'hsl(231, 16%, 92%)',
          'yellow-500': '#FFA500',
          'n-green': '#006400',
          'n-gray': '#4F4F4F',
      },
    },
    neumorphismSize: {
      xs: '0.05em',
      sm: '0.1em',
      default: '0.2em',
      lg: '0.4em',
      xl: '0.8em',
    },
  },
  plugins: [require('tailwindcss-neumorphism')],
}
