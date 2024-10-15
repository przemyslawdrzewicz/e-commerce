import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify']
  },

  vite: {
    plugins: [vuetify({ autoImport: true })]
  },

  modules: ['@pinia/nuxt', '@nuxt/test-utils/module'],
  css: ['vuetify/styles', '~/assets/scss/main.scss'],

  alias: {
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs'
  },

  ssr: false,

  typescript: {
    typeCheck: true
  },

  compatibilityDate: '2024-10-11'
})
