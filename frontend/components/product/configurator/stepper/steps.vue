<template>
  <div>
    <product-configurator-stepper-step
      v-for="step in steps"
      :key="step.index"
      :current-step="currentStep"
      :category="step.category"
      :index="step.index"
      @back="back"
    />
  </div>
</template>

<script lang="ts" setup>
import type { Step } from '@/interfaces/configurator/stepper'

interface Props {
  steps: Step[]
  currentStep: number
}

const props = defineProps<Props>()

const emit = defineEmits<{
  back: [value: number]
}>()

const back = (value: number) => emit('back', value)
</script>
