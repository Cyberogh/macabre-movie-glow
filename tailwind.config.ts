import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        halloween: {
          blood: "hsl(var(--blood-red))",
          flame: "hsl(var(--flame-orange))",
          candle: "hsl(var(--candle-glow))",
          ghost: "hsl(var(--ghost-white))",
          midnight: "hsl(var(--midnight))",
          fog: "hsl(var(--fog))",
          pumpkin: "hsl(var(--pumpkin-glow))",
        },
      },
      fontFamily: {
        creepster: ['Creepster', 'cursive'],
        nosifer: ['Nosifer', 'cursive'],
        cinzel: ['Cinzel', 'serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-fog': 'var(--gradient-fog)',
        'gradient-fire': 'var(--gradient-fire)',
        'gradient-pumpkin': 'var(--gradient-pumpkin)',
      },
      boxShadow: {
        'glow-red': 'var(--shadow-glow-red)',
        'glow-orange': 'var(--shadow-glow-orange)',
        'ember': 'var(--shadow-ember)',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1', textShadow: '0 0 20px hsl(var(--flame-orange)), 0 0 40px hsl(var(--blood-red))' },
          '50%': { opacity: '0.85', textShadow: '0 0 10px hsl(var(--flame-orange)), 0 0 20px hsl(var(--blood-red))' },
        },
        glow: {
          '0%, 100%': { filter: 'brightness(1) drop-shadow(0 0 20px hsl(var(--pumpkin-glow)))' },
          '50%': { filter: 'brightness(1.3) drop-shadow(0 0 40px hsl(var(--pumpkin-glow)))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-ember': {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100px) translateX(20px)', opacity: '0' },
        },
        mist: {
          '0%, 100%': { transform: 'translateX(0)', opacity: '0.3' },
          '50%': { transform: 'translateX(50px)', opacity: '0.5' },
        },
        bat: {
          '0%': { transform: 'translateX(-100px) translateY(0)' },
          '50%': { transform: 'translateX(50vw) translateY(-20px)' },
          '100%': { transform: 'translateX(calc(100vw + 100px)) translateY(0)' },
        },
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
        flicker: 'flicker 3s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        'float-ember': 'float-ember 3s ease-out infinite',
        mist: 'mist 8s ease-in-out infinite',
        bat: 'bat 15s linear infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
