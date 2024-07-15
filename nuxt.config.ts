// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer:{
    port: 8000
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app : {
   head: {
     script: [
       {
         src: 'https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js',
         async: true,
       },
     ],
   }
  },
  modules: ['@nuxtjs/tailwindcss']
})