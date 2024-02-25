import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'
import VueRouter from 'unplugin-vue-router/vite'
import VitePurgecss from 'vite-plugin-purgecss'
import viteCompression from 'vite-plugin-compression'

import {defineConfig} from 'vite'
import {fileURLToPath, URL} from 'node:url'

export default defineConfig({
  plugins: [
    VueRouter(),
    Vue({
      template: { transformAssetUrls },
    }),
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/mains.scss',
      },
    }),
    Components(),
    ViteFonts(),
    viteCompression({algorithm: 'brotliCompress'}),
    VitePurgecss({
      content: [
        './index.html',
        './src/**/*.vue',
        './src/**/*.js',
      ]
    })
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  },
})
