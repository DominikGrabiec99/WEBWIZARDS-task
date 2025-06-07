export default defineNuxtConfig({
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
