import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Previous from '@/components/product/carousel/actions/previous.vue'

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
    price: '144',
    description:
      'A chair is a type of seat, typically designed for one person and consisting of one or more legs.',
    image: '/products/bowl.png',
    code: 'bowl',
    configurator: []
  },
  {
    id: 2,
    title: 'Bowl 2',
    price: '144',
    description:
      'A chair is a type of seat, typically designed for one person and consisting of one or more legs.',
    image: '/products/bowl.png',
    code: 'bowl',
    configurator: []
  },
  {
    id: 3,
    title: 'Bowl 3',
    price: '144',
    description:
      'A chair is a type of seat, typically designed for one person and consisting of one or more legs.',
    image: '/products/bowl.png',
    code: 'bowl',
    configurator: []
  },
  {
    id: 4,
    title: 'Bowl 4',
    price: '144',
    description:
      'A chair is a type of seat, typically designed for one person and consisting of one or more legs.',
    image: '/products/bowl.png',
    code: 'bowl',
    configurator: []
  }
]

describe('Carousel - Back button', () => {
  const wrapperConfig = {
    props: {
      products: MockProducts,
      selectedProduct: MockProducts[0]
    },
    global: {
      plugins: [vuetify]
    }
  }

  let wrapper: any

  beforeEach(() => {
    wrapper = mount(Previous, wrapperConfig)
  })

  it('should return last product when first selected and back clicked', async () => {
    await wrapper.setProps({ selectedProduct: MockProducts[0] })

    const nextButton = wrapper.find('.v-btn')
    await nextButton.trigger('click')

    const updateSelected = wrapper.emitted()['update-selected']

    expect(updateSelected[0]).toEqual([MockProducts[3]])
  })

  it('should return first product when second selected and back clicked', async () => {
    await wrapper.setProps({ selectedProduct: MockProducts[1] })

    const nextButton = wrapper.find('.v-btn')
    await nextButton.trigger('click')

    const updateSelected = wrapper.emitted()['update-selected']

    expect(updateSelected[0]).toEqual([MockProducts[0]])
  })

  it('should return second product when third selected and back clicked', async () => {
    await wrapper.setProps({ selectedProduct: MockProducts[2] })

    const nextButton = wrapper.find('.v-btn')
    await nextButton.trigger('click')

    const updateSelected = wrapper.emitted()['update-selected']

    expect(updateSelected[0]).toEqual([MockProducts[1]])
  })

  it('should return third product when fourth selected and back clicked', async () => {
    await wrapper.setProps({ selectedProduct: MockProducts[3] })

    const nextButton = wrapper.find('.v-btn')
    await nextButton.trigger('click')

    const updateSelected = wrapper.emitted()['update-selected']

    expect(updateSelected[0]).toEqual([MockProducts[2]])
  })
})
