/** @type {import('tailwindcss').Config} */
import type { PluginAPI } from "tailwindcss/types/config";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    function ({ addUtilities }: { addUtilities: PluginAPI["addUtilities"] }) {
      addUtilities({
        ".blur-filter": {
          filter: "url(#blur-and-scale)",
        },
      });
    },
  ],
};
