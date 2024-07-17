// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs',
        semi: true
      }
    }
  },
  future: {
    compatibilityVersion: 4
  },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts'
  ],
  srcDir: 'app',
  serverDir: 'server',
  tailwindcss: {},
  fonts: {
    experimental: {
      processCSSVariables: true
    },
    families: [
      {
        name: 'Gentium Book Plus',
        provider: 'google'
      }
    ]
  }
});
