import plugin from 'tailwindcss/plugin'

export const outlineOffset = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      'otl-o': value => ({
        outlineOffset: `${value}`
      })
    },
    {
      values: theme('outlineOffset'),
      type: 'any'
    }
  )
})
