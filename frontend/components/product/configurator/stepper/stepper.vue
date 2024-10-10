<template>
  <div class="d-flex my-2">
    <product-configurator-stepper-steps
      class="steps align-self-center"
      :steps="steps"
      :current-step="step"
      @back="setStep($event)"
    />
    <product-configurator-stepper-content
      class="align-self-center"
      :selected-configurator="selectedConfigurator"
    />
  </div>
  <product-configurator-stepper-actions-next
    v-if="step < steps.length"
    :selected-configurator="selectedConfigurator"
    @next="setStep(step + 1)"
  />
  <product-configurator-stepper-actions-cart v-else />
</template>

<script setup>
import { useConfiguratorStore } from '@/store/configurator'

const configuratorStore = useConfiguratorStore()
const { product } = toRefs(configuratorStore)

const { configurator } = toRefs(product.value)

const step = ref(1)
const setStep = value => (step.value = value)

const steps = computed(() =>
  configurator.value.map(({ category }, index) => ({
    category,
    index: index + 1
  }))
)

const selectedConfigurator = computed(() => configurator.value[step.value - 1])
</script>

<style lang="scss" scoped>
@import '@/assets/scss/breakpoints';

.steps {
  margin-left: -200px;
  width: 200px;

  @media (max-width: $md) {
    margin-left: 0;
    margin-top: 30px;
    margin-bottom: 30px;
  }
}

.step-btn {
  font-size: 12px !important;
}
</style>
