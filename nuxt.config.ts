// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: {
    host: '127.0.0.1',
  },
  modules: [
    'nuxt-auth-utils',
    '@nuxt/ui',
  ],
  runtimeConfig: {
    oauth: {
      x: {
        clientId: process.env.X_CLIENT_ID,
        clientSecret: process.env.X_CLIENT_SECRET
      }
    },
    session: {
      maxAge: 60 * 60 * 24 * 7
    },
  }
})
