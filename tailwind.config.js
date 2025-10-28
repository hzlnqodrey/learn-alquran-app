const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
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
        // Custom colors for Quran app
        quran: {
          gold: "#D4AF37",
          "gold-light": "#E8C547",
          "gold-dark": "#B8941F",
          green: "#22C55E",
          "green-light": "#86EFAC",
          "green-dark": "#16A34A",
          blue: "#3B82F6",
          "blue-light": "#93C5FD",
          "blue-dark": "#1D4ED8",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
        arabic: ["Amiri", "Arabic Typesetting", "Traditional Arabic", "serif"],
        quran: ["Hafs", "Amiri Quran", "Arabic Typesetting", "serif"],
      },
      fontSize: {
        "arabic-xs": ["14px", { lineHeight: "1.8" }],
        "arabic-sm": ["16px", { lineHeight: "1.8" }],
        "arabic-base": ["18px", { lineHeight: "1.8" }],
        "arabic-lg": ["20px", { lineHeight: "1.8" }],
        "arabic-xl": ["24px", { lineHeight: "1.8" }],
        "arabic-2xl": ["28px", { lineHeight: "1.8" }],
        "arabic-3xl": ["32px", { lineHeight: "1.8" }],
        "arabic-4xl": ["36px", { lineHeight: "1.8" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        112: "28rem",
        128: "32rem",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-in-out",
        "slide-in": "slide-in 0.3s ease-out",
        "bounce-gentle": "bounce-gentle 2s infinite",
        "pulse-slow": "pulse 3s infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "slide-in": {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "hsl(var(--foreground))",
            '[class~="lead"]': {
              color: "hsl(var(--muted-foreground))",
            },
            a: {
              color: "hsl(var(--primary))",
              textDecoration: "underline",
              fontWeight: "500",
            },
            strong: {
              color: "hsl(var(--foreground))",
              fontWeight: "600",
            },
            "ol[type='A']": false,
            "ol[type='a']": false,
            "ol[type='A' s]": false,
            "ol[type='a' s]": false,
            "ol[type='I']": false,
            "ol[type='i']": false,
            "ol[type='I' s]": false,
            "ol[type='i' s]": false,
            "ol[type='1']": false,
          },
        },
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    // Custom plugin for RTL support
    function({ addUtilities }) {
      const newUtilities = {
        '.rtl': {
          direction: 'rtl',
        },
        '.ltr': {
          direction: 'ltr',
        },
        '.text-arabic': {
          fontFamily: 'var(--font-arabic)',
          textAlign: 'right',
          direction: 'rtl',
          lineHeight: '1.8',
          letterSpacing: '0.025em',
        },
        '.text-quran': {
          fontFamily: 'var(--font-quran)',
          textAlign: 'right',
          direction: 'rtl',
          lineHeight: '2',
          letterSpacing: '0.05em',
          wordSpacing: '0.1em',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}