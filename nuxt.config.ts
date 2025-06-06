export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  server: {
    port: process.env.PORT
  },
  runtimeConfig: {
    public: {
      webwizardApi: process.env.NUXT_PUBLIC_WEBWIZARD_API
    }
  }
})
