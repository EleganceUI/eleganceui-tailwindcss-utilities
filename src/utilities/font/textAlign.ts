import plugin from 'tailwindcss/plugin'

export const textAlign = plugin(({ addUtilities }) => {
  const aligns = ['left', 'right', 'center', 'justify', 'start', 'end']
  const newUtilities: Record<string, any> = {}
  aligns.forEach(align => {
    newUtilities[`.tx-${align}`] = { textAlign: align }
  })
  addUtilities(newUtilities)
})
