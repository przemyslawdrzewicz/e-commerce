import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import {
  requiredRule,
  emailRule,
  postalCodeRule,
  phoneRule
} from '@/utils/validationRules'

describe('required rule', () => {
  it('should return true when passing value', () => {
    const value = 'value'
    const response = requiredRule(value)
    expect(response).toBe(true)
  })

  it('should return error message when passing empty value', () => {
    const value = ''
    const response = requiredRule(value)
    expect(response).toBe('Field is required')
  })
})

describe('email rule', () => {
  it('should return true when passing correct email', () => {
    const value = 'jan.kowalski@gmail.com'
    const response = emailRule(value)
    expect(response).toBe(true)
  })

  it('should return error message when passing email without @', () => {
    const value = 'jan.kowalski.gmail.com'
    const response = emailRule(value)
    expect(response).toBe('Wrong format')
  })

  it('should return error message when passing email without suffix .com', () => {
    const value = 'jan.kowalski@gmail'
    const response = emailRule(value)
    expect(response).toBe('Wrong format')
  })
})

describe('postal code rule', () => {
  it('should return true when passing correct value', () => {
    const value = '11-111'
    const response = postalCodeRule(value)
    expect(response).toBe(true)
  })

  it('should return error message when passing postal code without dash', () => {
    const value = '11111'
    const response = postalCodeRule(value)
    expect(response).toBe('Wrong format (11-111)')
  })

  it('should return error message when passing not full value', () => {
    const value = '11-11'
    const response = postalCodeRule(value)
    expect(response).toBe('Wrong format (11-111)')
  })
})

describe('phone rule', () => {
  it('should return true when passing correct value', () => {
    const value = '222333444'
    const response = phoneRule(value)
    expect(response).toBe(true)
  })

  it('should return error message when passing too short value', () => {
    const value = '22233344'
    const response = phoneRule(value)
    expect(response).toBe('Wrong phone number')
  })

  it('should return error message when passing string with correct length', () => {
    const value = 'aaabbbccc'
    const response = phoneRule(value)
    expect(response).toBe('Wrong phone number')
  })

  it('should return error message when too long value', () => {
    const value = '2223334445'
    const response = phoneRule(value)
    expect(response).toBe('Wrong phone number')
  })
})
