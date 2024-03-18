import plugin from 'tailwindcss/plugin'

export const col = plugin(({ addUtilities }) => {
  addUtilities({
    '.col': { display: 'flex', flexDirection: 'column' }
  })
})
