import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'var(--font-poppins)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-outfit)', 'var(--font-sans)', 'ui-sans-serif', 'sans-serif'],
        display: ['var(--font-outfit)', 'var(--font-sans)', 'ui-sans-serif', 'sans-serif'],
        outfit: ['var(--font-outfit)', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
        body: ['var(--font-sans)', 'var(--font-poppins)', 'system-ui', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          50: "hsl(204, 100%, 97%)",
          100: "hsl(204, 94%, 94%)",
          200: "hsl(201, 94%, 86%)",
          300: "hsl(199, 95%, 74%)",
          400: "hsl(198, 93%, 60%)",
          500: "hsl(198, 89%, 48%)",
          600: "hsl(200, 98%, 39%)",
          700: "hsl(201, 96%, 32%)",
          800: "hsl(201, 90%, 27%)",
          900: "hsl(202, 80%, 24%)",
          950: "hsl(202, 80%, 16%)",
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Premium University Brochure Theme
        royal: {
          50: "hsl(221, 83%, 97%)",
          100: "hsl(220, 91%, 93%)",
          200: "hsl(221, 83%, 86%)",
          300: "hsl(221, 77%, 76%)",
          400: "hsl(221, 70%, 64%)",
          500: "hsl(221, 72%, 51%)",
          600: "hsl(221, 83%, 42%)",
          700: "hsl(221, 84%, 35%)",
          800: "hsl(221, 84%, 29%)",
          900: "hsl(221, 84%, 24%)",
          950: "hsl(221, 84%, 16%)",
        },
        crimson: {
          50: "hsl(351, 95%, 96%)",
          100: "hsl(351, 89%, 91%)",
          200: "hsl(351, 90%, 83%)",
          300: "hsl(351, 87%, 72%)",
          400: "hsl(351, 84%, 59%)",
          500: "hsl(351, 83%, 47%)",
          600: "hsl(351, 83%, 40%)",
          700: "hsl(351, 83%, 33%)",
          800: "hsl(351, 82%, 28%)",
          900: "hsl(351, 78%, 25%)",
          950: "hsl(351, 85%, 14%)",
        },
        deepBlue: {
          DEFAULT: "hsl(221, 84%, 24%)",
          light: "hsl(221, 84%, 35%)",
          dark: "hsl(221, 84%, 16%)",
        },
        gold: {
          50: "hsl(48, 100%, 96%)",
          100: "hsl(48, 96%, 89%)",
          200: "hsl(48, 97%, 77%)",
          300: "hsl(45, 97%, 64%)",
          400: "hsl(43, 96%, 56%)",
          500: "hsl(38, 92%, 50%)",
          600: "hsl(32, 95%, 44%)",
          700: "hsl(26, 90%, 37%)",
          800: "hsl(23, 83%, 31%)",
          900: "hsl(22, 78%, 26%)",
          950: "hsl(21, 85%, 14%)",
        },
        slate: {
          50: "hsl(210, 40%, 98%)",
          100: "hsl(210, 40%, 96%)",
          200: "hsl(214, 32%, 91%)",
          300: "hsl(213, 27%, 84%)",
          400: "hsl(215, 20%, 65%)",
          500: "hsl(215, 16%, 47%)",
          600: "hsl(215, 19%, 35%)",
          700: "hsl(215, 25%, 27%)",
          800: "hsl(217, 33%, 17%)",
          900: "hsl(222, 47%, 11%)",
        },
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
        spin: "spin 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
