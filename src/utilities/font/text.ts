import plugin from 'tailwindcss/plugin'

export const text = plugin(({ addUtilities, theme }) => {
  const utilities: Record<string, any> = {}
  const colorEntries = Object.entries(theme('colors') || {})
  const fontSizeEntries = Object.entries(theme('fontSize') || {})
  const fontWeightEntries = Object.entries(theme('fontWeight') || {})

  fontSizeEntries.forEach(([fontSizeName, fontSizeValue]) => {
    fontWeightEntries.forEach(([fontWeightName, fontWeightValue]) => {
      colorEntries.forEach(([colorName, colorValues]) => {
        if (typeof colorValues === 'object') {
          Object.entries(colorValues).forEach(([shade, colorValue]) => {
            const classNameWithShadeAndWeight = `.fs-${fontSizeName}-${fontWeightName}-${colorName}-${shade}`
            utilities[classNameWithShadeAndWeight] = {
              fontSize: fontSizeValue,
              fontWeight: fontWeightValue,
              color: colorValue
            }

            const classNameWithShade = `.fs-${fontSizeName}-${colorName}-${shade}`
            utilities[classNameWithShade] = {
              fontSize: fontSizeValue,
              color: colorValue
            }
          })
        } else {
          const classNameWithWeight = `.fs-${fontSizeName}-${fontWeightName}-${colorName}`
          utilities[classNameWithWeight] = {
            fontSize: fontSizeValue,
            fontWeight: fontWeightValue,
            color: colorValues
          }

          const classNameWithoutWeight = `.fs-${fontSizeName}-${colorName}`
          utilities[classNameWithoutWeight] = {
            fontSize: fontSizeValue,
            color: colorValues
          }
        }

        const classNameOnlyWeight = `.fs-${fontSizeName}-${fontWeightName}`
        utilities[classNameOnlyWeight] = {
          fontSize: fontSizeValue,
          fontWeight: fontWeightValue
        }
      })
    })
  })
  addUtilities(utilities)
})
