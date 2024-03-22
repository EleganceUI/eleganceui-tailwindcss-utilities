import plugin from 'tailwindcss/plugin'

export const row = plugin(({ addUtilities }) => {
  addUtilities({
    '.row': { display: 'flex', flexDirection: 'row' },
    '.row-reverse': { display: 'flex', flexDirection: 'row-reverse' }
  })
})
