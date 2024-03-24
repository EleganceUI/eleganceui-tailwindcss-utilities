import plugin from 'tailwindcss/plugin'

export const border = plugin(({ addUtilities, theme }) => {
  const utilities: Record<string, any> = {}
  const colorEntries = Object.entries(theme('colors') || {})
  const borderWidthEntries = Object.entries(theme('borderWidth') || {})
  const borderStyleEntries = [
    'solid',
    'dashed',
    'dotted',
    'double',
    'hidden',
    'none'
  ]
  borderWidthEntries.forEach(([borderWidthName, borderWidthValue]) => {
    borderStyleEntries.forEach(borderStyle => {
      colorEntries.forEach(([colorName, colorValues]) => {
        if (typeof colorValues === 'object') {
          Object.entries(colorValues).forEach(([shade, colorValue]) => {
            const classNameWithShadeAndWeight = `.bw-${borderWidthName}-${borderStyle}-${colorName}-${shade}`
            utilities[classNameWithShadeAndWeight] = {
              borderWidth: borderWidthValue,
              borderStyle,
              borderColor: colorValue
            }

            const classNameWithShade = `.bw-${borderWidthName}-${colorName}-${shade}`
            utilities[classNameWithShade] = {
              borderWidth: borderWidthValue,
              borderColor: colorValue
            }
          })
        } else {
          const classNameWithBorderStyle = `.bw-${borderWidthName}-${borderStyle}-${colorName}`
          utilities[classNameWithBorderStyle] = {
            borderWidth: borderWidthValue,
            borderStyle,
            borderColor: colorValues
          }

          const classNameWithoutBorderStyle = `.bw-${borderWidthName}-${colorName}`
          utilities[classNameWithoutBorderStyle] = {
            borderWidth: borderWidthValue,
            borderColor: colorValues
          }
        }
      })
    })
  })
  addUtilities(utilities)
})
