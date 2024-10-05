<template>
  <v-btn
    class="step-btn"
    color="black"
    width="200"
    :disabled="!isValid"
    @click="addToCart"
  >
    Add to cart
  </v-btn>
</template>

<script setup>
import { validateConfigValue } from '@/utils/products/configurator'
import { useCartStore } from '@/store/cart'

const cartStore = useCartStore()

const props = defineProps({
  config: {
    type: Array,
    default: () => []
  },
  product: {
    type: Object,
    default: () => {}
  },
  currentStep: {
    type: Number,
    default: 0
  }
})

const { id, config, product, currentStep } = toRefs(props)

const isValid = computed(() =>
  validateConfigValue(config.value, currentStep.value)
)

const addToCart = () => {
  const { title, price, image } = product.value
  let selectedImage = image

  config.value.forEach(({ code, value, colors }) => {
    if (!colors) return

    const selectedColor = colors.find(({ color }) => color === value)
    selectedImage = selectedImage.replace(`{${code}}`, selectedColor.code)
  })

  const item = {
    id,
    title,
    price,
    image: selectedImage,
    configurator: config.value,
    quantity: 1
  }

  cartStore.addItem(item)
}
</script>
