import plugin from 'tailwindcss/plugin'

export const directional = plugin(({ matchUtilities, addUtilities, theme }) => {
  const generateDirection =
    (direction: string) => (value: string | number) => ({
      [direction]: `${value}`
    })
  const directionals = ['top', 'right', 'bottom', 'left']
  directionals.forEach(direction => {
    matchUtilities(
      {
        [`${direction[0]}`]: generateDirection(direction)
      },
      {
        values: theme('spacing'),
        supportsNegativeValues: true,
        type: 'any'
      }
    )
    addUtilities({
      [`.${direction[0]}-auto`]: {
        [direction]: 'auto'
      }
    })
  })
  matchUtilities(
    {
      x: value => ({
        left: `${value}`,
        right: `${value}`
      }),
      y: value => ({
        top: `${value}`,
        bottom: `${value}`
      })
    },
    {
      values: theme('spacing'),
      type: 'any'
    }
  )
})
