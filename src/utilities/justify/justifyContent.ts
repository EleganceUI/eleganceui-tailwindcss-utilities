import plugin from 'tailwindcss/plugin'

export const justifyContent = plugin(({ addUtilities }) => {
  addUtilities({
    '.jc-normal': { justifyContent: 'normal' },
    '.jc-start': { justifyContent: 'flex-start' },
    '.jc-end': { justifyContent: 'flex-end' },
    '.jc-center': { justifyContent: 'center' },
    '.jc-between': { justifyContent: 'space-between' },
    '.jc-around': { justifyContent: 'space-around' },
    '.jc-evenly': { justifyContent: 'space-evenly' },
    '.jc-stretch': { justifyContent: 'stretch' }
  })
})
