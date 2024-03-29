/** @type {import('tailwindcss').Config} */

import { colors } from "./src/utils/constants";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: () => ({
        pickMenuShadow: `inset 0 -8px 0 0 #10212A`,
        newGameCpu: `inset 0 -8px 0 0 #CC8B13`,
        newGamePlayer: `inset 0 -8px 0 0 #118C87`,
        resetButton: `inset 0 -4px 0 0 #6B8997`,
        turnInfo: `inset 0 -4px 0 0 #10212A`,
        nextRound: `inset 0 -4px 0 0 #CC8B13`,
      }),
      maxWidth: {
        "360": "360px",
      },
    },
    fontFamily: {
      "Outfit": ["Outfit", "sans-serif"],
    },
    colors: {
      ...colors
    },
    minWidth: {
      "280": "280px",
      "300": "300px",
      "360": "360px",
    }
  },
  plugins: [],
}

