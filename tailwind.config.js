/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        G50: "var(--G50)",
        G75: "var(--G75)",
        G100: "var(--G100)",
        G200: "var(--G200)",
        G300: "var(--G300)",
        G400: "var(--G400)",
        G500: "var(--G500)",
        B50: "var(--B50)",
        B75: "var(--B75)",
        B100: "var(--B100)",
        B200: "var(--B200)",
        B300: "var(--B300)",
        B400: "var(--B400)",
        B500: "var(--B500)",
        N50: "var(--N50)",
        N75: "var(--N75)",
        N100: "var(--N100)",
        N200: "var(--N200)",
        N300: "var(--N300)",
        N400: "var(--N400)",
        N500: "var(--N500)",

        success: "var(--success)",
        danger: "var(--danger)",
      },

      fontSize: {
        responsiveHeading: "clamp(28px, 10vw, 60px)",
        xs: "var(--text-xs)", // 9px
        sm: "var(--text-sm)", // 12px
        md: "var(--text-md)", // 14px
        base: "var(--text-base)", // 16px
        lg: "var(--text-lg)", // 18px
        xl: "var(--text-xl)", // 21px
        "2xl": "var(--text-2xl)", // 23px
        "3xl": "var(--text-3xl)", // 28px
        "4xl": "var(--text-4xl)", // 38px
        "5xl": "var(--text-5xl)", // 51px
        "6xl": "var(--text-6xl)", // 67px
        "7xl": "var(--text-7xl)", // 90px
      },
    },
  },
  plugins: [],

  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@/*": ["./src/*"],
    },
  },
};
