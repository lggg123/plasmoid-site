import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'shooting-star': 'shooting-star 5s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
        'shooting-star': {
          '0%': { transform: 'translateX(0) translateY(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'translateX(200px) translateY(200px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
