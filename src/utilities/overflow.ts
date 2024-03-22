import plugin from 'tailwindcss/plugin'

export const overflow = plugin(({ addUtilities }) => {
  const overflowTypes = ['auto', 'hidden', 'clip', 'visible', 'scroll']
  const newUtilities: Record<string, any> = {}
  overflowTypes.forEach(overflow => {
    newUtilities[`.ov-${overflow}`] = { overflow }
    newUtilities[`.ovx-${overflow}`] = { overflowX: overflow }
    newUtilities[`.ovy-${overflow}`] = { overflowY: overflow }
  })
  addUtilities(newUtilities)
})
