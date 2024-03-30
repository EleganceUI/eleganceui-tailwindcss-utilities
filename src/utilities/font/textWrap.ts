import plugin from 'tailwindcss/plugin'

export const textWrap = plugin(({ addUtilities }) => {
  const wraps = ['wrap', 'nowrap', 'balance', 'pretty']
  const newUtilities: Record<string, any> = {}
  wraps.forEach(align => {
    newUtilities[`.tx-${align}`] = { textWrap: align }
  })
  addUtilities(newUtilities)
})
