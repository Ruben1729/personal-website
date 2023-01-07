// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
    build: {
        // @ts-ignore
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
        transpile: ['mdi-vue']
    },
    css: ["~/assets/scss/global.scss"],
    tailwind: {
        cssPath: '~/assets/css/tailwind.css'
    },
    googleFonts: {
        display: "swap",
        useStylesheet: true,
        inject: true,
        download: true,
        families: {
            Poppins: [300, 400, 500, 600, 700, 800, 900],
            FiraCode: [500, 600, 700]
        },
    },
})
