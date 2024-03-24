import plugin from 'tailwindcss/plugin'

export const flex = plugin(({ addUtilities }) => {
  addUtilities({
    '.f-1': { flex: '1 1 0%' },
    '.f-auto': { flex: '1 1 auto' },
    '.f-initial': { flex: '0 1 auto' },
    '.f-none': { flex: 'none' }
  })
})
