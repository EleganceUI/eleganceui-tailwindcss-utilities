import plugin from 'tailwindcss/plugin'

export const placeContent = plugin(({ addUtilities }) => {
  addUtilities({
    '.pc-center': { placeContent: 'center' },
    '.pc-start': { placeContent: 'start' },
    '.pc-end': { placeContent: 'end' },
    '.pc-between': { placeContent: 'space-between' },
    '.pc-around': { placeContent: 'space-around' },
    '.pc-evenly': { placeContent: 'space-evenly' },
    '.pc-baseline': { placeContent: 'baseline' },
    '.pc-stretch': { placeContent: 'stretch' }
  })
})
