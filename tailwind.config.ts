
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      colors: {

        // ----- Recommended -----
        // Use https://realtimecolors.com to pick your palette,
        // then supply https://tailwindshades.com with your colors
        // to generate the objects that are required below.

        primary: {
          DEFAULT: '#2563EB',
          50: '#CDDBFA',
          100: '#BACEF9',
          200: '#95B3F5',
          300: '#7098F2',
          400: '#4A7EEE',
          500: '#2563EB',
          600: '#124AC6',
          700: '#0D3792',
          800: '#09245F',
          900: '#04102C',
          950: '#020712'
        }

      }
    }
  }
}