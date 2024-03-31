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
  // eslint-disable-next-line sonarjs/cognitive-complexity
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
                    utilities[
                      `.bw-${side}-${borderStyle}-${colorName}-${shade}`
                    ] = {
                      [`border${direction}Width`]: '1px',
                      borderStyle,
                      borderColor: colorValue
                    }
                  } else {
                    utilities[className][`border${direction}Width`] =
                      borderWidthValue

                    utilities[
                      `.bw-${side}-${borderStyle}-${colorName}-${shade}`
                    ][`border${direction}Width`] = '1px'
                  }
                })
              } else {
                const classNameWithSideAndStyleAndShade = `.bw-${side}-${borderWidthName}-${borderStyle}-${colorName}-${shade}`
                utilities[classNameWithSideAndStyleAndShade] = {
                  [`border${sideMap[side]}Width`]: borderWidthValue,
                  borderStyle,
                  borderColor: colorValue
                }

                utilities[`.bw-${side}-${borderStyle}-${colorName}-${shade}`] =
                  {
                    [`border${sideMap[side]}Width`]: '1px',
                    borderStyle,
                    borderColor: colorValue
                  }

                const classNameWithSideAndShade = `.bw-${side}-${borderWidthName}-${colorName}-${shade}`
                utilities[classNameWithSideAndShade] = {
                  [`border${sideMap[side]}Width`]: borderWidthValue,
                  borderColor: colorValue
                }

                utilities[`.bw-${side}-${colorName}-${shade}`] = {
                  [`border${sideMap[side]}Width`]: '1px',
                  borderColor: colorValue
                }

                utilities[`.bw-${borderStyle}-${colorName}-${shade}`] = {
                  borderWidth: '1px',
                  borderStyle,
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
                  utilities[`.bw-${borderStyle}-${colorName}`] = {
                    borderWidth: '1px',
                    borderStyle,
                    borderColor: colorValues
                  }
                } else {
                  utilities[className][`border${direction}Width`] =
                    borderWidthValue

                  utilities[`.bw-${side}-${borderStyle}-${colorName}`][
                    `border${direction}Width`
                  ] = '1px'
                }
              })
            } else {
              const classNameWithSideAndStyle = `.bw-${side}-${borderWidthName}-${borderStyle}-${colorName}`
              utilities[classNameWithSideAndStyle] = {
                [`border${sideMap[side]}Width`]: borderWidthValue,
                borderStyle,
                borderColor: colorValues
              }

              utilities[`.bw-${side}-${borderStyle}-${colorName}`] = {
                [`border${sideMap[side]}Width`]: '1px',
                borderStyle,
                borderColor: colorValues
              }

              const classNameWithSide = `.bw-${side}-${borderWidthName}-${colorName}`
              utilities[classNameWithSide] = {
                [`border${sideMap[side]}Width`]: borderWidthValue,
                borderColor: colorValues
              }

              utilities[`.bw-${side}-${colorName}`] = {
                [`border${sideMap[side]}Width`]: '1px',
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
