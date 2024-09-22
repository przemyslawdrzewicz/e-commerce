<template>
  <div>
    <div v-for="step in steps" :key="step.value">
      <product-configurator-stepper-step
        :current-step="currentStep"
        :steps="steps"
        :step="step"
        @back="back"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  steps: {
    type: Array,
    default: () => []
  },
  currentStep: {
    type: Number,
    default: 1
  }
})

const emit = defineEmits(['back'])
const back = value => emit('back', value)
</script>
