import plugin from 'tailwindcss/plugin'

export const justifySelf = plugin(({ addUtilities }) => {
  addUtilities({
    '.js-auto': { justifySelf: 'auto' },
    '.js-start': { justifySelf: 'start' },
    '.js-end': { justifySelf: 'end' },
    '.js-center': { justifySelf: 'center' },
    '.js-stretch': { justifySelf: 'stretch' }
  })
})
