import plugin from 'tailwindcss/plugin'

export const pseudo = plugin(({ addUtilities }) => {
  addUtilities({
    '.after-base': {
      '@apply after:block after:content-[""]': {}
    },
    '.before-base': {
      '@apply before:block before:content-[""]': {}
    }
  })
})
