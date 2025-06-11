// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxtjs/tailwindcss',
  ],

  future: {
    compatibilityVersion: 4,
  },
  eslint: {
    config: {
      stylistic: {
        quotes: 'single', // TODO - check if it is needed
      },
    },
  },
})