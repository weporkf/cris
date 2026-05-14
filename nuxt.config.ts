// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: ['@nuxtjs/sitemap'],

  site: {
    url: 'https://tapejointing.co.uk',
  },

  app: {
    head: {
      title: 'PAC Construction Solutions LTD - Professional Tape & Jointing Services',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Expert plasterboard finishing for residential & commercial projects in London. Quality tape & jointing services with smooth finishes and fast turnaround.'
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap'
        },
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=AW-18015195008',
          async: true,
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18015195008');`,
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  components: [
    { path: '~/components/atoms' },
    { path: '~/components/molecules' },
    { path: '~/components/organisms' },
  ],

})
