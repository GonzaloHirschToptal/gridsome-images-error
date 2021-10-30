const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addUtilities, e, theme, variants }) {
  const gradients = theme('gradients', {})
  const gradientVariants = variants('gradients', [])

  const utilities = _.map(gradients, (startend, name) => ({
    [`.bg-gradient-${e(name)}`]: {
      backgroundImage: `linear-gradient(${startend})`
    }
  }))

  addUtilities(utilities, gradientVariants)
})