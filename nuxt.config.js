import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - srcouncil',
    title: 'srcouncil',
    meta: [
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/viewer.js', mode: "client" },
    { src: '~/plugins/number.js', mode: "server" },
    { src: '~/plugins/vuelidate', mode: "client" },
    { src: '~/plugins/vuetyper', mode: "client" },
    { src: '~/plugins/print', mode: "client" },
    { src: '~/plugins/countdown', mode: "client" }
  ],

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
    timing: false
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // '@nuxt/http', // Removed - using static data instead
    '@nuxtjs/moment',
  ],

  moment: {
    defaultTimezone: 'Asia/Kolkata'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: 'G-M2FB6N690R'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#1D3A7C',
          accent: colors.grey.darken3,
          secondary: '#2C498D',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          textColor: '#136A89',
          subCardColor: "#222222",
          footerColor: "black",
          iconColor: "#1D3A7C"
        },
        dark: {
          primary: '#1D3A7C',
          accent: colors.grey.darken3,
          secondary: '#2C498D',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          textColor: '#FFFFFF',
          subCardColor: "#222222",
          footerColor: "white",
          iconColor: "white"
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-gtranslate']
  },
}
