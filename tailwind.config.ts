import {Config} from 'tailwindcss'

const config: Config = {
  content: [
    `./{src,dist}/**/*.{js,jsx,ts,tsx,svg}`,
    // add any other files you want to scan for classes here, such as themes.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
