import plugin from 'tailwindcss/plugin'

export const borderColor = plugin(({ matchUtilities, theme }) => {
  const colorEntries = Object.entries(theme('colors') || {})
  const flattenColors = colorEntries.flatMap(([key, value]) => {
    if (typeof value === 'object') {
      return Object.entries(value).map(([shade, colorValue]) => [
        `${key}-${shade}`,
        colorValue
      ])
    }
    return [[key, value]]
  })
  matchUtilities(
    {
      bc: value => ({
        borderColor: `${value}`
      })
    },
    {
      values: Object.fromEntries(flattenColors),
      type: 'color'
    }
  )
})
