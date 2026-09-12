// Design tokens for consistent styling

export const designTokens = {
  colors: {
    primary: {
      main: "hsl(351, 83%, 47%)", // Crimson
      light: "hsl(351, 83%, 57%)",
      dark: "hsl(351, 83%, 37%)",
    },
    secondary: {
      main: "hsl(221, 84%, 24%)", // Royal Blue
      light: "hsl(221, 84%, 35%)",
      dark: "hsl(221, 84%, 16%)",
    },
    accent: {
      main: "hsl(38, 92%, 50%)", // Gold
      light: "hsl(43, 96%, 56%)",
      dark: "hsl(26, 90%, 37%)",
    },
    neutral: {
      white: "hsl(0, 0%, 100%)",
      light: "hsl(221, 83%, 97%)",
      gray: "hsl(221, 77%, 76%)",
      dark: "hsl(221, 84%, 16%)",
      black: "hsl(0, 0%, 0%)",
    },
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    "2xl": "24px",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  },
  transitions: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
  },
  breakpoints: {
    mobile: "320px",
    tablet: "641px",
    desktop: "1025px",
    large: "1441px",
  },
}

export type DesignTokens = typeof designTokens
