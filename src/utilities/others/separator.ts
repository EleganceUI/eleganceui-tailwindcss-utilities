import plugin from 'tailwindcss/plugin'

export const separator = plugin(({ addUtilities, theme }) => {
  const commonStyles = {
    borderWidth: '0',
    borderRadius: '100px',
    backgroundColor: '#e2e8f0'
  }
  const xStyles = {
    ...commonStyles,
    height: '1px',
    width: '100%'
  }
  const yStyles = {
    ...commonStyles,
    height: '100%',
    width: '1px'
  }
  const utilities: Record<string, any> = {
    '.hr-y': yStyles,
    '.hr-x': xStyles
  }
  const colorEntries = Object.entries(theme('colors') || {})
  colorEntries.forEach(([colorName, colorValues]) => {
    if (typeof colorValues === 'object') {
      Object.entries(colorValues).forEach(([shade, colorValue]) => {
        utilities[`.hr-x-${colorName}-${shade}`] = {
          ...xStyles,
          backgroundColor: colorValue
        }
        utilities[`.hr-y-${colorName}-${shade}`] = {
          ...yStyles,
          backgroundColor: colorValue
        }
      })
    } else {
      utilities[`.hr-x-${colorName}`] = {
        ...xStyles,
        backgroundColor: colorValues
      }
      utilities[`.hr-y-${colorName}`] = {
        ...yStyles,
        backgroundColor: colorValues
      }
    }
  })
  addUtilities(utilities)
})
