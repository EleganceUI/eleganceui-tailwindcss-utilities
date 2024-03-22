import plugin from 'tailwindcss/plugin'

export const borderWidth = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      bw: value => ({
        borderWidth: `${value}`
      }),
      'bw-x': value => ({
        borderLeftWidth: `${value}`,
        borderRightWidth: `${value}`
      }),
      'bw-y': value => ({
        borderTopWidth: `${value}`,
        borderBottomWidth: `${value}`
      }),
      'bw-s': value => ({
        borderInlineStartWidth: `${value}`
      }),
      'bw-e': value => ({
        borderInlineEndWidth: `${value}`
      }),
      'bw-t': value => ({
        borderTopWidth: `${value}`
      }),
      'bw-b': value => ({
        borderBottomWidth: `${value}`
      }),
      'bw-l': value => ({
        borderLeftWidth: `${value}`
      }),
      'bw-r': value => ({
        borderRightWidth: `${value}`
      })
    },
    {
      values: theme('borderWidth'),
      type: 'any'
    }
  )
})
