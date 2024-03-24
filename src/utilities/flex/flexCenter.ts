import plugin from 'tailwindcss/plugin'

export const flexCenter = plugin(({ addUtilities }) => {
  addUtilities({
    '.center': { justifyContent: 'center', alignItems: 'center' }
  })
})
