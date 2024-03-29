import plugin from 'tailwindcss/plugin'

export const size = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      'max-size': value => ({
        maxWidth: `${value}`,
        maxHeight: `${value}`
      }),
      'min-size': value => ({
        minWidth: `${value}`,
        minHeight: `${value}`
      }),
      square: value => ({
        minWidth: `${value}`,
        minHeight: `${value}`,
        width: `${value}`,
        height: `${value}`
      })
    },
    {
      values: theme('size'),
      type: 'any'
    }
  )
})
