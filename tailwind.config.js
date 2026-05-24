/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-surface": "#191c1e",
        "background": "#f8f9fc",
        "tertiary-container": "#6851a5",
        "tertiary": "#50388b",
        "surface-dim": "#d9dadd",
        "surface-tint": "#005ac3",
        "surface-container-low": "#f2f3f6",
        "on-error": "#ffffff",
        "inverse-on-surface": "#eff1f4",
        "surface-bright": "#f8f9fc",
        "on-primary": "#ffffff",
        "surface-container": "#edeef1",
        "inverse-primary": "#aec6ff",
        "secondary": "#006a68",
        "on-primary-fixed-variant": "#004395",
        "secondary-fixed": "#7df5f3",
        "tertiary-fixed-dim": "#cfbcff",
        "primary-container": "#005bc5",
        "surface-variant": "#e1e2e5",
        "on-background": "#191c1e",
        "surface-container-highest": "#e1e2e5",
        "error": "#ba1a1a",
        "on-tertiary-fixed": "#22005d",
        "on-secondary-fixed-variant": "#00504f",
        "on-secondary-fixed": "#00201f",
        "primary": "#004497",
        "primary-fixed": "#d8e2ff",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#006e6d",
        "on-primary-fixed": "#001a42",
        "on-error-container": "#93000a",
        "inverse-surface": "#2e3133",
        "on-tertiary": "#ffffff",
        "surface-container-high": "#e7e8eb",
        "surface-container-lowest": "#ffffff",
        "surface": "#f8f9fc",
        "on-tertiary-fixed-variant": "#4f378a",
        "outline": "#727784",
        "on-surface-variant": "#424753",
        "on-tertiary-container": "#e1d4ff",
        "secondary-container": "#79f2f0",
        "outline-variant": "#c2c6d5",
        "primary-fixed-dim": "#aec6ff",
        "error-container": "#ffdad6",
        "tertiary-fixed": "#e9ddff",
        "on-primary-container": "#ccdaff",
        "secondary-fixed-dim": "#5dd9d6"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "margin-mobile": "16px",
        "max-width": "1280px",
        "margin-desktop": "64px",
        "gutter-mobile": "16px",
        "gutter-desktop": "24px",
        "base": "8px"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Hanken Grotesk", "sans-serif"],
        "headline-lg-mobile": ["Hanken Grotesk", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "title-lg": ["Hanken Grotesk", "sans-serif"],
        "label-lg": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "label-sm": ["Inter", "sans-serif"],
        "headline-md": ["Hanken Grotesk", "sans-serif"],
        "headline-lg": ["Hanken Grotesk", "sans-serif"],
        "display-lg": ["Hanken Grotesk", "sans-serif"]
      },
      fontSize: {
        "headline-lg-mobile": [
          "28px",
          {
            lineHeight: "36px",
            fontWeight: "600"
          }
        ],
        "body-md": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0.25px",
            fontWeight: "400"
          }
        ],
        "title-lg": [
          "22px",
          {
            lineHeight: "28px",
            fontWeight: "500"
          }
        ],
        "label-lg": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0.1px",
            fontWeight: "500"
          }
        ],
        "body-lg": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0.5px",
            fontWeight: "400"
          }
        ],
        "label-sm": [
          "11px",
          {
            lineHeight: "16px",
            letterSpacing: "0.5px",
            fontWeight: "500"
          }
        ],
        "headline-md": [
          "28px",
          {
            lineHeight: "36px",
            fontWeight: "600"
          }
        ],
        "headline-lg": [
          "32px",
          {
            lineHeight: "40px",
            fontWeight: "600"
          }
        ],
        "display-lg": [
          "57px",
          {
            lineHeight: "64px",
            letterSpacing: "-0.25px",
            fontWeight: "700"
          }
        ]
      }
    }
  },
  plugins: [],
}
