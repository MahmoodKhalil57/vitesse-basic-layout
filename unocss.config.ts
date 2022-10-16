import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['text-cstm-1', 'text-#000000 dark:text-#fbfbfe'],
    ['text-cstm-2', 'text-#fbfbfe dark:text-#fbfbfe'],
    ['bg-cstm-1', 'bg-#ffffff dark:bg-#121212'],
    ['bg-cstm-2', 'bg-#e6e6e6 dark:bg-#181818'],
    ['bg-cstm-lo', 'bg-#181818 dark:bg-#3c3c43'],
    ['bg-cstm-sb', 'bg-#33363d dark:bg-#181818'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
