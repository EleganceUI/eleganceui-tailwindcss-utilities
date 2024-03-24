import plugin from 'tailwindcss/plugin'

export const objectPosition = plugin(({ addUtilities }) => {
  const objectPositionValues = {
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
  Object.entries(objectPositionValues).forEach(([key, value]) => {
    newUtilities[`.obj-${key}`] = { objectPosition: value.replace('-', ' ') }
  })
  addUtilities(newUtilities)
})
