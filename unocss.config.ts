import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({ scale: 1.5, warn: true }),
    presetTypography()
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})