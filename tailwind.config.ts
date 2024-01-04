import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          bg: "#111111",
          primary: "#1E1E1F",
          secondary: "#EECC69",
          tertiary: "#D6D6D6"
        }
      }
    }

  },
  plugins: [],
}
export default config
