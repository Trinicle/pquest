/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      textColor: {
        'primary': 'rgb(var(--color-primary) / <alpha-value>)',
        'secondary': 'rgb(var(--color-secondary) / <alpha-value>)',
        'tertiary': 'rgb(var(--color-tertiary) / <alpha-value>)',
      },
      borderColor: {
        'primary': 'rgb(var(--border-primary) / <alpha-value>)',
        'secondary': 'rgb(var(--color-primary) / <alpha-value>)',
      },
      backgroundColor: {
        'primary': 'rgb(var(--background-primary) / <alpha-value>)',
        'secondary': 'rgb(var(--background-secondary) / <alpha-value>)',
        'tertiary': 'rgb(var(--background-tertiary) / <alpha-value>)',
        'warm': 'rgb(var(--warm-gray) / <alpha-value>)',
      },
      fill: {
        'primary': 'rgb(var(--color-primary) / <alpha-value>)',
        'secondary': 'rgb(var(--color-secondary) / <alpha-value>)',
        'tertiary': 'rgb(var(--color-tertiary) / <alpha-value>)',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
