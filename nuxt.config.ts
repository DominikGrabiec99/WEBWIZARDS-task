export default defineNuxtConfig({
  head: {
    title: 'WEBWIZARDS - dedykowane rozwiązania dla branży automotive',
    htmlAttrs: {
      lang: 'pl'
    },
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap'
      }
    ]
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/variables.scss" as *;
            @use "@/assets/scss/mixins.scss" as *;
          `
        }
      }
    }
  },
  server: {
    port: process.env.PORT
  },
  runtimeConfig: {
    webwizardApi: process.env.NUXT_PUBLIC_WEBWIZARD_API
  }
})
