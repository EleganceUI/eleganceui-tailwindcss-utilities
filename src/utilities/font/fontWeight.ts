import plugin from 'tailwindcss/plugin'

export const fontWeight = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      fw: value => ({
        fontWeight: value
      })
    },
    {
      values: theme('fontWeight'),
      type: 'any'
    }
  )
})
