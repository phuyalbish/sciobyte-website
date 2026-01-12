/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  corePlugins: {
    scrollBehavior: true,
  },
  theme: {
    extend: {
      colors: {

        BGPRIMARY: "var(--bg-primary)", //#1E1E1E
        
        success: "var(--success)",
        danger: "var(--danger)",
      },


      fontFamily: {
        pat: "var(--font-pat)", //Patrick Hand
        liches: "var(--font-liches)", //Staatliches
        reenie: "var(--font-reenie)", //Reenie Beanie
        manrope: "var(--font-manrope)", //Manrope
        dance: "var(--font-dance)", // Dancing Script
      },

      // cursor: {
      //   custom: "url('/images/custom-cursor.svg'), auto",
      // },
      fontSize: {
        // 12px
        xs: ['var(--text-xs)', { lineHeight: 'var(--lineheight-base)' }], 
        // 14px
        sm: ['var(--text-sm)', { lineHeight: 'var(--lineheight-base)' }],
        // 16px
        base: ['var(--text-base)', { lineHeight: 'var(--lineheight-md)' }],
        // 18px
        md: ['var(--text-md)', { lineHeight: 'var(--lineheight-lg)' }],
        // 24px
        lg: ['var(--text-lg)', { lineHeight: 'var(--lineheight-xl)' }],
        // 32px
        xl: ['var(--text-xl)', { lineHeight: 'var(--lineheight-2xl)' }],
        // 40px
        "2xl": ['var(--text-2xl)', { lineHeight: 'var(--lineheight-3xl)' }],
        // 48px
        "3xl": ['var(--text-3xl)', { lineHeight: 'var(--lineheight-4xl)' }],
        // 64px
        "4xl": ['var(--text-4xl)', { lineHeight: 'var(--lineheight-5xl)' }],
        // 72px
        "5xl": ['var(--text-5xl)', { lineHeight: 'var(--lineheight-6xl)' }],
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
