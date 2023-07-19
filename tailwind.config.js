/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "2rem",
        xl: "4rem",
        "2xl": "4rem",
      },
    },
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          inverted: "var(--color-text-inverted)",
          muted: "var(--color-text-muted)",
          white: "var(--color-text-white)",
        },
      },

      // backgrounds and buttons
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          dark: "var(--color-dark)",
          bgdark: "var(--color-bgdark)",
          darkmode: "var(--color-darkmode)",
          "button-accent": "var(--color-button-accent)",
          "button-accent-hover": "var(--color-button-accent-hover)",
          "button-muted": "var(--color-button-muted)",
        },
      },

      animation: {
        Loading: "Loading 10s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        slideIn: "slideIn 0.4s cubic-bezier(1, 0, 0, 0  )",
        // Nothing: 'Loading 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      keyframes: {
        //  loading animation
        Loading: {
          "0%, 100% ": {
            opacity: 0.1,
          },
          "50%": {
            opacity: 0.1,
          },
        },

        //  slidein animation
        slideIn: {
          "75%, 100% ": {
            transform: "scale(1)",
            opacity: 1,
          },
          "0%,50%": {
            transform: "scale(1)",
            opacity: 0,
          },
        },
      },
    },
  },
  variants: {
    extend: {
      filter: ["dark"],
      sepia: ["dark"],
      grayscale: ["dark"],
      opacity: ["dark"],
      "animate-none": ["dark"],
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes : ["fantasy"]
  }
}

