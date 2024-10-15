import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Details from '@/components/product/carousel/details.vue'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

global.ResizeObserver = require('resize-observer-polyfill')

const MockSelected = {
  id: 1,
  title: 'Bowl',
  price: '144',
  description:
    'A chair is a type of seat, typically designed for one person and consisting of one or more legs.',
  image: '/products/bowl.png',
  code: 'bowl',
  configurator: []
}

describe('Carousel - Details', () => {
  const wrapper = mount(Details, {
    props: {
      selected: MockSelected
    },
    global: {
      plugins: [vuetify]
    }
  })

  it('should return correct name when passing product', () => {
    const title = wrapper.find('.title').text()
    expect(title).toBe(MockSelected.title)
  })

  it('should return correct description when passing product', () => {
    const description = wrapper.find('.description').text()
    expect(description).toBe(MockSelected.description)
  })

  it('should return correct description when passing product', () => {
    const description = wrapper.find('.description').text()
    expect(description).toBe(MockSelected.description)
  })

  it('should return correct image when passing product', () => {
    const image = wrapper.find('img')
    expect(image.attributes('src')).toBe(MockSelected.image)
  })

  it('should return correct price when passing product', () => {
    const price = wrapper.find('.price').text()
    expect(price).toBe('$144.00')
  })
})
