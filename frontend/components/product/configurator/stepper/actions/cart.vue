<template>
  <v-btn class="step-btn" color="black" width="200" @click="addToCart">
    Add to cart
  </v-btn>
</template>

<script setup>
import { validateConfigValue } from '@/utils/products/configurator'

const props = defineProps({
  config: {
    type: Array,
    default: () => []
  },
  currentStep: {
    type: Number,
    default: 0
  }
})

const { config, currentStep } = toRefs(props)

const addToCart = () => {
  const isValid = validateConfigValue(config.value, currentStep.value)
  if (!isValid) {
    alert('show error')
    return
  }

  alert('super')
}
</script>
