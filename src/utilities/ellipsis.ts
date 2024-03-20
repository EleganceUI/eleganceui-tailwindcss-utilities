import plugin from 'tailwindcss/plugin'

export const ellipsis = plugin(({ addUtilities }) => {
  addUtilities({
    '.ellipsis': {
      display: ['block', '-webkit-box'],
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'normal',
      wordBreak: 'break-all',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: '1'
    }
  })
})
