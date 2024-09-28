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

const isValid = computed(() =>
  validateConfigValue(config.value, currentStep.value)
)

const addToCart = () => {
  console.log(config, 'config')
  alert('save')
}
</script>
