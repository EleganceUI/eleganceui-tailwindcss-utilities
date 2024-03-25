import plugin from 'tailwindcss/plugin'

export const letterSpacing = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      ls: value => ({ letterSpacing: `${value}` })
    },
    {
      values: theme('letterSpacing'),
      type: 'any'
    }
  )
})
