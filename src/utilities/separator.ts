import plugin from 'tailwindcss/plugin'

export const separator = plugin(({ addUtilities }) => {
  const commonStyles = {
    '@apply border-0 rounded bg-slate-200': {}
  }
  addUtilities({
    '.separator-x': {
      ...commonStyles,
      '@apply h-px w-full': {}
    },
    '.separator-y': {
      ...commonStyles,
      '@apply w-px h-full': {}
    }
  })
})
