import plugin from 'tailwindcss/plugin'

export const outlineWidth = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      otl: value => ({
        outlineWidth: `${value}`
      })
    },
    {
      values: theme('outlineWidth'),
      type: 'any'
    }
  )
})
