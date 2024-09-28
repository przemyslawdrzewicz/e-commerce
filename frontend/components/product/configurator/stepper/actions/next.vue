<template>
  <v-btn
    :disabled="!isValid"
    class="step-btn"
    color="black"
    width="200"
    @click="next"
  >
    Next
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

const emit = defineEmits(['next'])

const { config, currentStep } = toRefs(props)

const isValid = computed(() =>
  validateConfigValue(config.value, currentStep.value)
)

const next = () => emit('next')
</script>
