import plugin from 'tailwindcss/plugin'

export const skeleton = plugin(({ addUtilities }) => {
  addUtilities({
    '.animate-skeleton': {
      '@apply animate-pulse bg-slate-200': {}
    }
  })
})
