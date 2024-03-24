import plugin from 'tailwindcss/plugin'

export const objectFit = plugin(({ addUtilities }) => {
  const objectFitValues = ['cover', 'contain', 'fill', 'none', 'scale-down']
  const newUtilities: Record<string, any> = {}
  objectFitValues.forEach(value => {
    newUtilities[`.obj-${value}`] = { objectFit: value }
  })
  addUtilities(newUtilities)
})
