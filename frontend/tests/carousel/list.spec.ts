import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import List from '@/components/product/carousel/list.vue'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

global.ResizeObserver = require('resize-observer-polyfill')

const MockProducts = [
  {
    id: 1,
    title: 'Bowl',
    price: 144,
    description:
      'A chair is a type of seat, typically designed for one person and consisting of one or more legs.',
    image: '/products/bowl.png',
    code: 'bowl',
    configurator: []
  }
]

describe('Carousel - List', () => {
  it('should return correct src when passing product images', () => {
    const wrapper = mount(List, {
      props: {
        products: MockProducts
      },
      global: {
        plugins: [vuetify]
      }
    })

    const images = wrapper.findAll('img')
    expect(images.length).toBe(MockProducts.length)

    images.forEach((image, index) => {
      const product = MockProducts[index]
      expect(image.attributes('src')).toBe(product.image)
    })
  })
})
