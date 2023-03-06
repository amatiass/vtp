import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import VueMacros from 'unplugin-vue-macros/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: vue()
      },
      betterDefine: true
    }),
    Components({ dts: true }),
    AutoImport({
      imports: ['vue'],
      eslintrc: {
        /*  Default false, enable it when change AutoImport.imports config. */
        // enabled: true,
        globalsPropValue: true
      }
    }),
    Unocss()
  ],
  resolve: {
    alias: [{ find: '~/', replacement: `${resolve(__dirname, 'src')}/` }]
  },
  base: './'
})
