/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    colors: {
      background: "hsl(var(--background))",

      primary: "hsl(var(--primary))",

      secondary: "hsl(var(--secondary))",

      black: "hsl(var(--black))",
      "black-75": "hsl(var(--black-75))",
      "black-50": "hsl(var(--black-50))",
      "black-25": "hsl(var(--black-25))",
      "black-10": "hsl(var(--black-10))",
      "black-5": "hsl(var(--black-5))",

      destructive: "hsl(var(--destructive))",
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
    backgroundImage: {
      hero: "url('/src/assets/images/backgrounds/hero-bg.jpg')",
      "services-cards":
        "url('/src/assets/images/backgrounds/services-card-bg.svg')",
      "ant-why-us": "url('/src/assets/images/backgrounds/ant-why-us.svg')",
      "ant-faq": "url('/src/assets/images/backgrounds/ant-faq-bg.svg')",
      gradient: "linear-gradient(to left, #cffafe, #dbeafe)",
    },
  },
};
export const plugins = [require("tailwindcss-animate")];
