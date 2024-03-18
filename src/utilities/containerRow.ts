import plugin from 'tailwindcss/plugin'

export const containerRow = plugin(({ addUtilities }) => {
  addUtilities({
    '.container-row': {
      display: 'flex',
      flexFlow: 'row wrap',
      width: `min(100% - 32px, 1500px - 32px)`,
      '@screen sm': {
        width: `min(100% - 48px, 1500px - 48px)`
      },
      '@screen md': {
        width: `min(100% - 96px, 1500px - 96px)`
      },
      '@screen lg': {
        width: `min(100% - 128px, 1500px - 128px)`
      }
    }
  })
})
