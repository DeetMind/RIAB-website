/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal:  { DEFAULT: '#1D9E75', dark: '#0F5C3F', light: '#E4F5EE', mid: '#A8D9C3' },
        slate: { DEFAULT: '#3D5A6E', dark: '#243545', light: '#EBF2F7', mid: '#B0C8D8' },
        amber: { DEFAULT: '#C07A10', light: '#FFFBF0' },
        ink:   '#2C2C2A',
        muted: '#888786',
        border:'#E8E8E6',
        surface:'#F5F5F3',
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
