import plugin from 'tailwindcss/plugin'

export const justifyItems = plugin(({ addUtilities }) => {
  addUtilities({
    '.ji-start': { justifyItems: 'start' },
    '.ji-end': { justifyItems: 'end' },
    '.ji-center': { justifyItems: 'center' },
    '.ji-stretch': { justifyItems: 'stretch' }
  })
})
