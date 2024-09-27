import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "golden-glow": "5px 5px 200px rgba(198, 154, 53, 1)",
        "golden-glow-hero-mobile": "0px -30px 90px rgba(198, 154, 53, 0.8)",
        "golden-glow-cta-mobile": "0px -100px 130px rgba(198, 154, 53, 1)",
        "golden-glow-sm-mobile": "80px -20px 70px rgba(198, 154, 53, 0.5 )",
        "golden-glow-sm": "80px -20px 100px rgba(198, 154, 53, 0.4 )",
      },
      fontSize: {
        // Neue Montreal
        "h1-nm": ["64px", { lineHeight: "150%", fontWeight: "500" }], // Medium, 150%
        "h2-nm": ["48px", { lineHeight: "120%", fontWeight: "500" }], // Medium, 120%
        "h3-nm": ["32px", { lineHeight: "150%", fontWeight: "500" }], // Medium, 150%

        // Body
        "body-large": ["20px", { lineHeight: "150%", fontWeight: "400" }], // Regular, 150%
        "body-medium": ["18px", { lineHeight: "150%", fontWeight: "400" }], // Regular, 150%
        "body-small": ["16px", { lineHeight: "150%", fontWeight: "400" }], // Regular, 150%
        cta: ["16px", { lineHeight: "150%", fontWeight: "500" }], // Medium, 150%

        // PP NeueBit
        "h1-pn": ["94px", { lineHeight: "90%", fontWeight: "700" }], // Bold, 90%
        tags: [
          "24px",
          { lineHeight: "150%", fontWeight: "700", letterSpacing: "0.12em" },
        ],
      },
      colors: {
        // Greys
        "text-grey-1": "#E5E5E5",
        "text-grey-2": "#8F8F8F",
        "text-grey-3": "#8F8F8F",
        "card-grey-1": "#1C1C1A",
        "background-grey": "#1C1C1A",

        // Yellow
        "cta-yellow-1": "#FEF2B0",
        "cta-yellow-2": "#FDE254",
        "card-yellow": "#FCD400",
        "tags-yellow": "#B39700",

        // Semantic Colors
        "red-semantic": "#BF4949",
        "green-semantic": "#26A246",

        // Gradients
        "gradient-fill": "#0F0D00",
        "gradient-stroke": "#151200",
        "radial-bg": "#151200",

        // Background gradient
        "background-radial": {
          DEFAULT:
            "radial-gradient(circle, rgba(151,98,0,0.3) 0%, rgba(151,98,0,0) 100%)",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle, rgba(151,98,0,0.3) 0%, rgba(151,98,0,0) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
