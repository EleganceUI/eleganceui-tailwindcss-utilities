import plugin from 'tailwindcss/plugin'

export const alignItems = plugin(({ addUtilities }) => {
  addUtilities({
    '.ai-start': {
      alignItems: 'flex-start'
    },
    '.ai-end': {
      alignItems: 'flex-end'
    },
    '.ai-center': {
      alignItems: 'center'
    },
    '.ai-baseline': {
      alignItems: 'baseline'
    },
    '.ai-stretch': {
      alignItems: 'stretch'
    }
  })
})
