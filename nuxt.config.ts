// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxtjs/tailwindcss',
    '@vesp/nuxt-fontawesome',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-05-15',
  eslint: {
    config: {
      stylistic: {
        quotes: 'single', // TODO - check if it is needed
      },
    },
  },

  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['arrow-right'],
    },
  },
})
