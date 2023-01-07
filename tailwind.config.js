module.exports = {
    mode: "jit",
    content: [
        "./components/**/*.{vue,js}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                background: "#0b1121",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};