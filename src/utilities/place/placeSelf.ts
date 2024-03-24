import plugin from 'tailwindcss/plugin'

export const placeSelf = plugin(({ addUtilities }) => {
  addUtilities({
    '.ps-auto': { placeSelf: 'auto' },
    '.ps-start': { placeSelf: 'start' },
    '.ps-end': { placeSelf: 'end' },
    '.ps-center': { placeSelf: 'center' },
    '.ps-stretch': { placeSelf: 'stretch' }
  })
})
