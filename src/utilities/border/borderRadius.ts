import plugin from 'tailwindcss/plugin'

export const borderRadius = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      br: value => ({
        borderRadius: `${value}`
      }),
      'br-s': value => ({
        borderStartStartRadius: `${value}`,
        borderEndStartRadius: `${value}`
      }),
      'br-e': value => ({
        borderStartEndRadius: `${value}`,
        borderEndEndRadius: `${value}`
      }),
      'br-t': value => ({
        borderTopLeftRadius: `${value}`,
        borderTopRightRadius: `${value}`
      }),
      'br-b': value => ({
        borderBottomLeftRadius: `${value}`,
        borderBottomRightRadius: `${value}`
      }),
      'br-l': value => ({
        borderTopLeftRadius: `${value}`,
        borderBottomLeftRadius: `${value}`
      }),
      'br-r': value => ({
        borderTopRightRadius: `${value}`,
        borderBottomRightRadius: `${value}`
      }),
      'br-ss': value => ({
        borderStartStartRadius: `${value}`
      }),
      'br-se': value => ({
        borderStartEndRadius: `${value}`
      }),
      'br-ee': value => ({
        borderEndEndRadius: `${value}`
      }),
      'br-es': value => ({
        borderEndStartRadius: `${value}`
      }),
      'br-tl': value => ({
        borderTopLeftRadius: `${value}`
      }),
      'br-tr': value => ({
        borderTopRightRadius: `${value}`
      }),
      'br-br': value => ({
        borderBottomRightRadius: `${value}`
      }),
      'br-bl': value => ({
        borderBottomLeftRadius: `${value}`
      })
    },
    {
      values: theme('borderRadius'),
      type: 'any'
    }
  )
})
