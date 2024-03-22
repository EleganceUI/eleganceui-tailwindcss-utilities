import plugin from 'tailwindcss/plugin'

export const borderColor = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      bc: value => ({
        borderColor: `${value}`
      })
    },
    {
      values: theme('borderColor'),
      type: 'any'
    }
  )
})
