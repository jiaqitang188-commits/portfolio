/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'aspect-[9/16]',
    'aspect-[16/9]',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
