import plugin from 'tailwindcss/plugin'

export const backgroundPosition = plugin(({ addUtilities }) => {
  const backgroundPositionValues = {
    t: 'top',
    b: 'bottom',
    c: 'center',
    l: 'left',
    r: 'right',
    lb: 'left-bottom',
    lt: 'left-top',
    rb: 'right-bottom',
    rt: 'right-top'
  }
  const newUtilities: Record<string, any> = {}
  Object.entries(backgroundPositionValues).forEach(([key, value]) => {
    newUtilities[`.bg-${key}`] = {
      backgroundPosition: value.replace('-', ' ')
    }
  })
  addUtilities(newUtilities)
})
