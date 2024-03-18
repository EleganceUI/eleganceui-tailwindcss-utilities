import plugin from 'tailwindcss/plugin'

export const lineHeight = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      lh: value => ({ lineHeight: `${value}` })
    },
    {
      values: theme('lineHeight'),
      type: 'any'
    }
  )
})
