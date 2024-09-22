<template>
  <div class="d-flex my-2">
    <product-configurator-stepper-steps
      :steps="steps"
      :current-step="step"
      class="steps align-self-center"
      @back="setStep($event)"
    />
    <product-configurator-stepper-content
      ref="content"
      :configurator="configurator"
      :selected-configurator="selectedConfigurator"
      class="align-self-center"
    />
  </div>
  <product-configurator-stepper-actions-next
    v-if="step < steps.length"
    :current-step="step"
    :config="config"
    @next="setStep(step + 1)"
  />
  <product-configurator-stepper-actions-cart
    v-else
    :current-step="step"
    :config="config"
  />
</template>

<script setup>
const props = defineProps({
  configurator: {
    type: Array,
    default: () => []
  }
})

const { configurator } = props

const step = ref(1)
const setStep = value => (step.value = value)

const steps = computed(() =>
  configurator.map(({ category }, index) => ({
    category,
    index: index + 1
  }))
)

const selectedConfigurator = computed(() => configurator[step.value - 1])

const content = ref(null)
const config = computed(() => content.value?.config || [])

defineExpose({ config })
</script>

<style lang="scss" scoped>
.steps {
  margin-left: -200px;
  width: 200px;
}

.step-btn {
  font-size: 12px !important;
}
</style>
