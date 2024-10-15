export const configurationNames = configurator => {
  const getColorName = (category, value, colors) => {
    const { code } = colors.find(({ code }) => code === value)
    return `${category} ${code}`
  }

  const getNumberName = (category, value, placeholder) =>
    `${category} ${value} ${placeholder}`

  const getFieldName = (category, value) => `${category} ${value}`

  return configurator
    .map(({ type, category, value, params, colors }) => {
      switch (type) {
        case 'color':
          return getColorName(category, value, colors)
        case 'number':
          return getNumberName(category, value, params?.placeholder)
        default:
          return getFieldName(category, value)
      }
    })
    .join(', ')
}
