<template>
  <v-btn class="step-btn" color="black" width="200" @click="next">Next</v-btn>
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

const emit = defineEmits(['next'])

const { config, currentStep } = toRefs(props)

const next = () => {
  const isValid = validateConfigValue(config.value, currentStep.value)
  if (!isValid) {
    alert('Select configuration')
    return
  }

  emit('next')
}
</script>
