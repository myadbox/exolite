import {Config} from 'tailwindcss'

const config: Config = {
  content: [
    `./{src,dist}/**/*.{js,jsx,ts,tsx,svg}`,
    `./node_modules/@myadbox/exoplanet-toolkit/src/components/**/*.{js,jsx,ts,tsx,svg}`,
    // add any other files you want to scan for classes here, such as themes and node_modules packages.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
