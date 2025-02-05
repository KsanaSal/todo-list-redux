import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "sky-medium": "#4CB7FF",
                "sky-dark": "#067DCE",
                "sky-black": "#032135",
                "green-light": "#EFFCEA",
                "green-medium": "#58FC1A",
                "green-dark": "#113703",
            },
        },
        fontFamily: {
            sans: ["Georgia", "sans-serif"],
            serif: ["Merriweather", "serif"],
            display: ["Oswald"],
        },
    },
    plugins: [],
};
export default config;
