/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#ffffff",
        foreground: "#111827",
        
        // Executive Bright Theme Colors (Apple/Stripe/IBM/McKinsey style)
        "primary": "#111827",
        "on-primary": "#ffffff",
        
        "accent-blue": "#0066cc",
        "accent-dark": "#004c99",
        "primary-container": "#0066cc",
        "on-primary-container": "#ffffff",

        "secondary": "#0f172a",
        "on-secondary": "#ffffff",

        "surface": "#ffffff",
        "surface-warm": "#fdfdfc",
        "surface-gray": "#f8f9fa",
        "surface-dim": "#f1f3f5",
        "surface-dark": "#0a1128", // Deep Navy for Section 5 Journey focus
        "surface-footer": "#060b19", // Deepest Navy for Footer
        
        "on-surface": "#111827",
        "on-surface-variant": "#4b5563",
        "on-surface-subtle": "#6b7280",
        
        "outline": "#e5e7eb",
        "outline-variant": "#f3f4f6",
        
        "bg-surface": "#ffffff",
        
        "error-container": "#ef4444",
        "on-error-container": "#ffffff",

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
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
      },
      borderRadius: {
        "DEFAULT": "4px",
        "lg": "12px",
        "xl": "16px",
        "2xl": "24px",
        "3xl": "32px",
        "full": "9999px"
      },
      spacing: {
        "unit": "4px",
        "md": "16px",
        "lg": "24px",
        "xl": "32px",
        "2xl": "48px",
        "3xl": "64px",
        "section-gap": "120px",
      },
      fontFamily: {
        "headline": ["Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "mono": ["Inter", "monospace"],
      },
      fontSize: {
        "headline-lg": ["36px", { "lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "headline-xl": ["56px", { "lineHeight": "64px", "letterSpacing": "-0.03em", "fontWeight": "800" }],
        "display-lg": ["44px", { "lineHeight": "52px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
        "body-md": ["16px", { "lineHeight": "26px", "fontWeight": "400" }],
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
        "scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scroll": "scroll 35s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
