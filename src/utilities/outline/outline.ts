import plugin from 'tailwindcss/plugin'

export const outline = plugin(({ addUtilities, theme }) => {
  const utilities: Record<string, any> = {}
  const colorEntries = Object.entries(theme('colors') || {})
  const outlineWidthEntries = Object.entries(theme('outlineWidth') || {})
  const outlineStyleEntries = ['solid', 'dashed', 'dotted', 'double', 'none']
  outlineWidthEntries.forEach(([outlineWidthName, outlineWidthValue]) => {
    outlineStyleEntries.forEach(outlineStyle => {
      colorEntries.forEach(([colorName, colorValues]) => {
        if (typeof colorValues === 'object') {
          Object.entries(colorValues).forEach(([shade, colorValue]) => {
            const classNameWithShadeAndWeight =
              `.otl-${outlineWidthName}-${outlineStyle}-${colorName}-${shade}`.replace(
                '-solid',
                ''
              )
            utilities[classNameWithShadeAndWeight] = {
              outlineWidth: outlineWidthValue,
              outlineStyle,
              outlineColor: colorValue
            }

            const classNameWithShade = `.otl-${outlineWidthName}-${colorName}-${shade}`
            utilities[classNameWithShade] = {
              outlineWidth: outlineWidthValue,
              outlineColor: colorValue
            }
          })
        } else {
          const classNameWithOutlineStyle =
            `.otl-${outlineWidthName}-${outlineStyle}-${colorName}`.replace(
              '-solid',
              ''
            )
          utilities[classNameWithOutlineStyle] = {
            outlineWidth: outlineWidthValue,
            outlineStyle,
            outlineColor: colorValues
          }

          const classNameWithoutOutlineStyle = `.otl-${outlineWidthName}-${colorName}`
          utilities[classNameWithoutOutlineStyle] = {
            outlineWidth: outlineWidthValue,
            outlineColor: colorValues
          }
        }
      })
    })
  })
  addUtilities(utilities)
})
