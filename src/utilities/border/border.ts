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
  const sides = ['t', 'b', 'l', 'r', 's', 'e', 'x', 'y']
  const sideMap: Record<string, any> = {
    t: 'Top',
    b: 'Bottom',
    l: 'Left',
    r: 'Right',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom']
  }
  borderWidthEntries.forEach(([borderWidthName, borderWidthValue]) => {
    borderStyleEntries.forEach(borderStyle => {
      colorEntries.forEach(([colorName, colorValues]) => {
        if (typeof colorValues === 'object') {
          Object.entries(colorValues).forEach(([shade, colorValue]) => {
            sides.forEach(side => {
              if (side === 'x' || side === 'y') {
                sideMap[side].forEach((direction: any) => {
                  const className = `.bw-${side}-${borderWidthName}-${borderStyle}-${colorName}-${shade}`
                  if (!utilities[className]) {
                    utilities[className] = {
                      [`border${direction}Width`]: borderWidthValue,
                      borderStyle,
                      borderColor: colorValue
                    }
                  } else {
                    utilities[className][`border${direction}Width`] = borderWidthValue
                  }
                })
              } else {
                const classNameWithSideAndStyleAndShade = `.bw-${side}-${borderWidthName}-${borderStyle}-${colorName}-${shade}`
                utilities[classNameWithSideAndStyleAndShade] = {
                  [`border${sideMap[side]}Width`]: borderWidthValue,
                  borderStyle,
                  borderColor: colorValue
                }

                const classNameWithSideAndShade = `.bw-${side}-${borderWidthName}-${colorName}-${shade}`
                utilities[classNameWithSideAndShade] = {
                  [`border${sideMap[side]}Width`]: borderWidthValue,
                  borderColor: colorValue
                }
              }
            })
          })
        } else {
          sides.forEach(side => {
            if (side === 'x' || side === 'y') {
              sideMap[side].forEach((direction: any) => {
                const className = `.bw-${side}-${borderWidthName}-${borderStyle}-${colorName}`
                if (!utilities[className]) {
                  utilities[className] = {
                    [`border${direction}Width`]: borderWidthValue,
                    borderStyle,
                    borderColor: colorValues
                  }
                } else {
                  utilities[className][`border${direction}Width`] = borderWidthValue
                }
              })
            } else {
              const classNameWithSideAndStyle = `.bw-${side}-${borderWidthName}-${borderStyle}-${colorName}`
              utilities[classNameWithSideAndStyle] = {
                [`border${sideMap[side]}Width`]: borderWidthValue,
                borderStyle,
                borderColor: colorValues
              }

              const classNameWithSide = `.bw-${side}-${borderWidthName}-${colorName}`
              utilities[classNameWithSide] = {
                [`border${sideMap[side]}Width`]: borderWidthValue,
                borderColor: colorValues
              }
            }
          })
        }
      })
    })
  })

  addUtilities(utilities)
})
