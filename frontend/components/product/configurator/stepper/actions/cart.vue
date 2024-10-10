<template>
  <v-btn
    class="step-btn"
    color="black"
    :width="width"
    :disabled="!isValid"
    to="/products/"
    @click="addToCart"
  >
    Add to cart
  </v-btn>
</template>

<script setup>
import { useCartStore } from '@/store/cart'
import { useConfiguratorStore } from '@/store/configurator'

const cartStore = useCartStore()

const props = defineProps({
  width: {
    type: String,
    default: '200'
  }
})

const configuratorStore = useConfiguratorStore()
const { product } = toRefs(configuratorStore)

const { configurator } = toRefs(product.value)

const isValid = computed(() => {
  const someEmptyValue = configurator.value.some(({ value }) => !value)
  return !someEmptyValue
})

const addToCart = () => {
  let fullImage = product.value.image

  configurator.value.forEach(({ code, value, colors }) => {
    if (colors) fullImage = fullImage.replace(`{${code}}`, value)
  })

  const newProduct = {
    ...product.value,
    fullImage
  }

  cartStore.addItem(newProduct)
}
</script>
