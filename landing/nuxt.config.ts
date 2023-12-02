import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'vue3-carousel-nuxt'
  ],
  css: [
    '~/assets/css/mstyle.css', 
    '~/assets/css/responsive.css',
    '~/assets/css/bootstrap.min.css', 
    '~/assets/css/flaticon.css',
    '~/assets/css/animate.min.css',
    '~/assets/css/meanmenu.min.css',
    '~/assets/css/icofont.min.css',
    '~/assets/css/style.scss',
    '~/assets/css/responsive.scss'
  ],
})
