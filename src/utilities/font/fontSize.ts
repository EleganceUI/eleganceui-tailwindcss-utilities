import plugin from 'tailwindcss/plugin'

export const fontSize = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      fs: value => ({
        fontSize: value,
        lineHeight: theme(`fontSize.${value}[1]`, 'normal')
      })
    },
    {
      values: theme('fontSize'),
      type: 'any'
    }
  )
})
