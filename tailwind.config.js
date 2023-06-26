const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './source/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter var', ...defaultTheme.fontFamily.sans] },
      colors: {
        "theme-primary": "#2563eb",
        "theme-primary-dark": "#1d4ed8"
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
