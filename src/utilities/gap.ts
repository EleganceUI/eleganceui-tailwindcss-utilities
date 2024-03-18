import plugin from 'tailwindcss/plugin'

export const gap = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      g: value => ({ gap: `${value}` }),
      gx: value => ({ columnGap: `${value}` }),
      gy: value => ({ rowGap: `${value}` })
    },
    {
      values: theme('spacing'),
      type: 'any'
    }
  )
})
