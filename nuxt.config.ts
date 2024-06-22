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
  modules: [
    '@nuxt/eslint'
  ],
  srcDir: 'app',
  serverDir: 'server',
  future: {
    compatibilityVersion: 4
  }
});
