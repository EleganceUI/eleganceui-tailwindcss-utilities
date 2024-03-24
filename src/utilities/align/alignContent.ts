import plugin from 'tailwindcss/plugin'

export const alignContent = plugin(({ addUtilities }) => {
  addUtilities({
    '.ac-normal': {
      alignContent: 'normal'
    },
    '.ac-center': {
      alignContent: 'center'
    },
    '.ac-start': {
      alignContent: 'flex-start'
    },
    '.ac-end': {
      alignContent: 'flex-end'
    },
    '.ac-between': {
      alignContent: 'space-between'
    },
    '.ac-around': {
      alignContent: 'space-around'
    },
    '.ac-evenly': {
      alignContent: 'space-evenly'
    },
    '.ac-baseline': {
      alignContent: 'baseline'
    },
    '.ac-stretch': {
      alignContent: 'stretch'
    }
  })
})
