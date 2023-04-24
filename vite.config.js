const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        detail: resolve(__dirname, 'detail.html'),
        promote: resolve(__dirname, 'promote.html'),
        register: resolve(__dirname, 'register.html'),
        promo: resolve(__dirname, 'promo.html'),
      },
    },
  },
})
