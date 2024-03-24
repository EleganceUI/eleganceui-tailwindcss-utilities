import plugin from 'tailwindcss/plugin'

export const colFull = plugin(({ addUtilities }) => {
  addUtilities({
    '.col-full': { display: 'flex', flexDirection: 'column', width: '100%' }
  })
})
