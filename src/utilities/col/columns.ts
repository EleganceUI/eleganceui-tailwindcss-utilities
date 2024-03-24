import plugin from 'tailwindcss/plugin'

export const columns = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      cols: value => ({
        columns: `${value}`
      })
    },
    {
      values: theme('columns'),
      type: 'any'
    }
  )
})
