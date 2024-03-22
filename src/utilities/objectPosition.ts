import plugin from 'tailwindcss/plugin'

export const objectPosition = plugin(({ addUtilities }) => {
  const objectPositionValues = [
    'top',
    'bottom',
    'center',
    'left',
    'right',
    'left-bottom',
    'left-top',
    'right-bottom',
    'right-top'
  ]
  const newUtilities: Record<string, any> = {}
  objectPositionValues.forEach(value => {
    newUtilities[`.obj-${value}`] = { objectPosition: value.replace('-', ' ') }
  })
  addUtilities(newUtilities)
})
