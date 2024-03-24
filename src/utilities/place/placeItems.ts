import plugin from 'tailwindcss/plugin'

export const placeItems = plugin(({ addUtilities }) => {
  addUtilities({
    '.pi-start': { placeItems: 'start' },
    '.pi-end': { placeItems: 'end' },
    '.pi-center': { placeItems: 'center' },
    '.pi-baseline': { placeItems: 'baseline' },
    '.pi-stretch': { placeItems: 'stretch' }
  })
})
