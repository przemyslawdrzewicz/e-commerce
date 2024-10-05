const requiredRule = value => !!value || 'Field is required'

const emailRule = value =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ||
  'Wrong format'

const postalCodeRule = value =>
  /^\d{2}-\d{3}$/.test(value) || 'Wrong format (11-111)'

const phoneRule = value => /^([0-9]{9})$/.test(value) || 'Wrong phone number'

export { requiredRule, emailRule, postalCodeRule, phoneRule }
