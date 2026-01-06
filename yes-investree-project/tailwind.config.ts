module.exports = {
  mode: "jit",
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
  theme: {
    extend: {
      screens: {
        "mobile-xs-only": { max: "320px", min: "0px" },
        "mobile-only": { max: "480px", min: "0px" },
        mobile: "320px",
        "mobile-xs": "430px",
        phablet: "481px",
        tablet: "768px",
        "down-tablet": { max: "767px" },
        "tablet-max": { max: "768px" },
        laptop: "1024px",
        desktop: "1200px",
        monitor: "1440px",
        "large-monitor": "1669px",
      },
      fontFamily: { "Noto-Sans-Thai": ["NotoSansThai"] },
      fontSize: {
        headline1: [
          "60px",
          { lineHeight: "84px", letterSpacing: "-0.25px", fontWeight: 600 },
        ],
        headline2: [
          "60px",
          { lineHeight: "84px", letterSpacing: "-0.25px", fontWeight: 700 },
        ],
        headline3: [
          "48px",
          { lineHeight: "64px", letterSpacing: "0px", fontWeight: 700 },
        ],
        headline4: [
          "36px",
          { lineHeight: "44px", letterSpacing: "-0.1px", fontWeight: 600 },
        ],
        headline5: [
          "24px",
          { lineHeight: "32px", letterSpacing: "-0.1px", fontWeight: 600 },
        ],
        headline6: [
          "20px",
          { lineHeight: "28px", letterSpacing: "-0.1px", fontWeight: 600 },
        ],
        headline7: [
          "18px",
          { lineHeight: "26px", letterSpacing: "-0.15px", fontWeight: 600 },
        ],
        headline8: [
          "32px",
          { lineHeight: "44px", letterSpacing: "-0.1px", fontWeight: 600 },
        ],
        headline9: [
          "48px",
          { lineHeight: "64px", letterSpacing: "0px", fontWeight: 600 },
        ],
        headline10: [
          "40px",
          { lineHeight: "44px", letterSpacing: "-0.1px", fontWeight: 600 },
        ],
        headline11: [
          "22px",
          { lineHeight: "28px", letterSpacing: "-0.1px", fontWeight: 600 },
        ],
        headline12: [
          "16px",
          { lineHeight: "24px", letterSpacing: "0px", fontWeight: 600 },
        ],
        headline13: [
          "20px",
          { lineHeight: "24px", letterSpacing: "-0.4px", fontWeight: 600 },
        ],
        headline14: [
          "24px",
          { lineHeight: "120%", letterSpacing: "-2%", fontWeight: 600 },
        ],

        subtitle1: [
          "18px",
          { lineHeight: "26px", letterSpacing: "-0.15px", fontWeight: 500 },
        ],
        subtitle2: [
          "16px",
          { lineHeight: "24px", letterSpacing: "0px", fontWeight: 500 },
        ],
        subtitle3: [
          "14px",
          { lineHeight: "24px", letterSpacing: "0.1px", fontWeight: 500 },
        ],
        subtitle4: [
          "32px",
          { lineHeight: "44px", letterSpacing: "-0.1px", fontWeight: 500 },
        ],
        subtitle5: [
          "24px",
          { lineHeight: "32px", letterSpacing: "-0.1px", fontWeight: 500 },
        ],
        subtitle6: [
          "32px",
          { lineHeight: "44px", letterSpacing: "-0.1px", fontWeight: 500 },
        ],
        subtitle7: [
          "20px",
          { lineHeight: "28px", letterSpacing: "-0.1px", fontWeight: 400 },
        ],
        subtitle8: [
          "22px",
          { lineHeight: "28px", letterSpacing: "-0.1px", fontWeight: 500 },
        ],
        subtitle9: [
          "24px",
          { lineHeight: "150%", letterSpacing: "0%", fontWeight: 400 },
        ],
        body1: [
          "18px",
          { lineHeight: "28px", letterSpacing: "0.1px", fontWeight: 400 },
        ],
        body2: [
          "18px",
          { lineHeight: "28px", letterSpacing: "0.1px", fontWeight: 600 },
        ],
        body3: [
          "16px",
          { lineHeight: "24px", letterSpacing: "0.1px", fontWeight: 400 },
        ],
        body4: [
          "16px",
          { lineHeight: "24px", letterSpacing: "0.1px", fontWeight: 500 },
        ],
        body5: [
          "14px",
          { lineHeight: "20px", letterSpacing: "0.1px", fontWeight: 400 },
        ],
        body6: [
          "14px",
          { lineHeight: "24px", letterSpacing: "0.1px", fontWeight: 600 },
        ],
        body7: [
          "12px",
          { lineHeight: "16px", letterSpacing: "0.15px", fontWeight: 400 },
        ],
        body8: [
          "12px",
          { lineHeight: "16px", letterSpacing: "0.15px", fontWeight: 500 },
        ],
        body9: [
          "20px",
          { lineHeight: "16px", letterSpacing: "0.1px", fontWeight: 500 },
        ],
        body10: [
          "28px",
          { lineHeight: "16px", letterSpacing: "-0.1px", fontWeight: 600 },
        ],
        body11: [
          "14px",
          { lineHeight: "20px", letterSpacing: "0.1px", fontWeight: 500 },
        ],
        body12: [
          "24px",
          { lineHeight: "32px", letterSpacing: "-0.1px", fontWeight: 500 },
        ],
        body13: [
          "28px",
          { lineHeight: "16px", letterSpacing: "-0.1px", fontWeight: 500 },
        ],
        body14: [
          "9px",
          { lineHeight: "14px", letterSpacing: "0.25px", fontWeight: 500 },
        ],
        body15: [
          "24px",
          { lineHeight: "32px", letterSpacing: "-0.1px", fontWeight: 400 },
        ],
        body16: ["20px", { lineHeight: "30px", fontWeight: 400 }],
        body17: [
          "16px",
          { lineHeight: "20.8px", letterSpacing: "-0.32px", fontWeight: 500 },
        ],
        body18: [
          "24px",
          { lineHeight: "31.2px", letterSpacing: "-0.24px", fontWeight: 500 },
        ],
        "button-more-article": [
          "18px",
          { lineHeight: "28px", letterSpacing: "0.1px", fontWeight: 600 },
        ],
        "button-xxlarge": [
          "24px",
          { lineHeight: "120%", letterSpacing: "0%", fontWeight: 500 },
        ],
        "button-xmlarge": [
          "20px",
          { lineHeight: "30px", letterSpacing: "-0.2px", fontWeight: 500 },
        ],
        "button-mlarge": [
          "16px",
          { lineHeight: "24px", letterSpacing: "-1%", fontWeight: 500 },
        ],
        "button-xlarge": [
          "18px",
          { lineHeight: "28px", letterSpacing: "0.1px", fontWeight: 500 },
        ],
        "button-large": [
          "16px",
          { lineHeight: "24px", letterSpacing: "0.25px", fontWeight: 600 },
        ],
        "button-medium": [
          "14px",
          { lineHeight: "20px", letterSpacing: "0.25px", fontWeight: 500 },
        ],
        "button-small": [
          "12px",
          { lineHeight: "18px", letterSpacing: "0.25px", fontWeight: 500 },
        ],
        "label-large": [
          "14px",
          { lineHeight: "16px", letterSpacing: "0.1px", fontWeight: 400 },
        ],
        "label-small": [
          "12px",
          { lineHeight: "16px", letterSpacing: "0.1px", fontWeight: 400 },
        ],
        caption: [
          "12px",
          { lineHeight: "16px", letterSpacing: "0.1px", fontWeight: 400 },
        ],
        input1: [
          "16px",
          { lineHeight: "20px", letterSpacing: "0.1px", fontWeight: 400 },
        ],
        input2: [
          "14px",
          { lineHeight: "18px", letterSpacing: "0.1px", fontWeight: 400 },
        ],
        input3: [
          "12px",
          { lineHeight: "16px", letterSpacing: "0.1px", fontWeight: 400 },
        ],
        "link-cookie": [
          "12px",
          { lineHeight: "16px", letterSpacing: "0.1px", fontWeight: 700 },
        ],
        overline: [
          "10px",
          { lineHeight: "14px", letterSpacing: "0.25px", fontWeight: 400 },
        ],
        banner: [
          "8px",
          { lineHeight: "14px", letterSpacing: "0.25px", fontWeight: 500 },
        ],
        "tab-mobile": [
          "16px",
          { lineHeight: "24px", letterSpacing: "0px", fontWeight: 600 },
        ],
      },
      colors: {
        article: {
          content: "#5B5B5B",
          quote: "#151B1F",
          border: "#DBDBDB",
        },
        "light-gray": {
          100: "#E4E4E4",
          200: "#EBEBEB",
        },
        gray: {
          "light-100": "#FAFAFA",
          "light-200": "#F7F7F7",
          "light-300": "#EEEEEE",
          "light-400": "#F1F1F1",
          "light-500": "#F3F3F3",
          "light-600": "#E0E0E0",
          "light-700": "#CCCCCC",
          "light-800": "#D1D1D1",
          "light-900": "#EAEAEA",
          100: "#ADADAD",
          200: "#828282",
          300: "#9A9A9A",
          400: "#787878",
          500: "#686868",
          600: "#3A3A3A",
          700: "#3F3F3F",
          800: "#222222",
          900: "#515151",
        },
        green: {
          100: "#8DC047",
          200: "#8CC640",
          300: "#6FB60E",
          400: "#5DA53B",
          primary: "#033f05",
          secondary: "#8bc53d",
        },

        blue: {
          primary: "#091C3A",
          secondary: "#113F7B",
          primarynew: "#071d3c",
          secondarynew: "#0016dd",
        },
        silver: {
          primary: "#8d8b90",
          secondary: "#fefefe",
        },
        glue: {
          primary: "#6FB60E",
          secondary: "#113F7B",
        },

        white: "#FFFFFF",
        success: { primary: "#37BD55", secondary: "#DAF3B2" },
        danger: { primary: "#F4364D", secondary: "#F44336" },
        warning: { primary: "#F1A442", secondary: "#FFE5A1" },
        "main-bg": "#F9F9F9",
      },
      backgroundImage: {
        "home-cover": "url('/images/home_cover.png')",
        "home-cover-mobile": "url('/images/home_cover_mobile.jpg')",
        "success-section": "url('/images/success_bg.png')",
        "benefit-section":
          "radial-gradient(98.69% 56.24% at 53.62% -31.46%, #C5DEFF 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(79.69% 29.42% at 95.21% 30%, rgba(140, 198, 64, 0.20) 0%, rgba(140, 198, 64, 0.00) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.00) 40.92%, #F9F9F9 68.55%), linear-gradient(90deg, #FFF 14.96%, rgba(255, 255, 255, 0.90) 40.51%, rgba(255, 255, 255, 0.00) 55.67%)",
        "team-section": "url('/images/team_section.png')",
        "funding-cover": "url('/images/funding_cover.png')",
        "career-cover": "url('/images/career_cover.png')",
        "investment-cover": "url('/images/investment_cover.png')",
        "news-cover": "url('/images/news_cover.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    function (components: {
      addComponents: (components: Record<string, any>) => void;
    }) {
      const { addComponents } = components;
      addComponents({
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen mobile-xs-only": { minWidth: "calc(100vw - 32px)" },
          "@screen mobile": { maxWidth: "481px", padding: "0px 20px" },
          "@screen tablet": { maxWidth: "768px", padding: "0px 32px" },
          "@screen laptop": { maxWidth: "1024px" },
          "@screen desktop": { maxWidth: "1128px", padding: "0px" },
        },
        ".search-fake-carousel-dot": {
          content: "''",
          bottom: "0",
          left: "calc(50% - 4px)",
          position: "absolute",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          display: "none",
          cursor: "pointer",
          backgroundColor: "var(--light-blue-500)",
          "@screen tablet": { display: "block" },
        },
        ".brake-words": { wordBreak: "break-word", overflowWrap: "break-word" },
      });
    },
  ],
};
