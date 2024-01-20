// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  ssr: false,
  components: [
    {
      path: '~/components',
      global: true,
    },
  ],
  content: {
    experimental: {
      clientDB: true
    }
  }
})
