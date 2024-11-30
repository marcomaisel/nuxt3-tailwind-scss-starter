export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_colors.scss" as *;',
          silenceDeprecations: [
            'import',
            'legacy-js-api',
          ],
        },
      },
    }
  },
  compatibilityDate: '2024-11-30',
})
