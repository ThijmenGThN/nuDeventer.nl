
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
        },
        secondary: {
          DEFAULT: '#B1C5EC',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#F3F6FC',
          400: '#D2DDF4',
          500: '#B1C5EC',
          600: '#84A3E1',
          700: '#5782D6',
          800: '#3062C5',
          900: '#254C98',
          950: '#1F4181'
        },
        accent: {
          DEFAULT: '#3636AB',
          50: '#B2B2E7',
          100: '#A2A2E2',
          200: '#8383D8',
          300: '#6464CE',
          400: '#4545C4',
          500: '#3636AB',
          600: '#292980',
          700: '#1B1B56',
          800: '#0E0E2B',
          900: '#000000',
          950: '#000000'
        }
      }
    }
  }
}
