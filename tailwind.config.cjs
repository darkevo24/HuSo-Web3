/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                typing: {
                    "0%": { width: "0%" },
                    "100%": { width: "100%" },
                },
                blink: {
                    "0%": { "border-color": "transparent" },
                    "50%": { "border-color": "white" },
                    "100%": { "border-color": "transparent" },
                },
            },
            animation: {
                typing: "typing 3s steps(40, end), blink .75s step-end infinite",
            },
            colors: {
                app: "#65d6f4",
                app_bg: "#1d1b27",
                app_gray: "#b9b8c1",
            },
        },
        fontFamily: {
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
            nominee: ["Nominee", "sans- serif"],
            redzone: ["Redzone", "sans- serif"],
        },
    },
    plugins: [
        {
            ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
        },
    ],
};
