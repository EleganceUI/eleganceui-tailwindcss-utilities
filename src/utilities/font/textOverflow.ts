import plugin from 'tailwindcss/plugin'

export const textOverflow = plugin(({ addUtilities }) => {
  addUtilities({
    '.tx-clip': {
      textOverflow: 'clip'
    },
    '.tx-ellipsis': {
      textOverflow: 'ellipsis'
    }
  })
})
