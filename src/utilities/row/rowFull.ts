import plugin from 'tailwindcss/plugin'

export const rowFull = plugin(({ addUtilities }) => {
  addUtilities({
    '.row-full': { display: 'flex', flexDirection: 'row', width: '100%' }
  })
})
