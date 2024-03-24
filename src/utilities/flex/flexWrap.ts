import plugin from 'tailwindcss/plugin'

export const flexWrap = plugin(({ addUtilities }) => {
  addUtilities({
    '.f-wrap-reverse': { flexWrap: 'wrap-reverse' },
    '.f-wrap': { flexWrap: 'wrap' },
    '.f-nowrap': { flexWrap: 'nowrap' }
  })
})
