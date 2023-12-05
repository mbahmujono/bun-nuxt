import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'vue3-carousel-nuxt'
  ],
  css: [
    '~/assets/css/animate.min.css',
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/flaticon.css',
    '~/assets/css/icofont.min.css', 
    '~/assets/css/mstyle.css',
    '~/assets/css/responsive.css',
    '~/assets/css/meanmenu.min.css',
    '~/assets/css/responsive.scss'
  ],
})