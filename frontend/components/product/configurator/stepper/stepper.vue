<template>
  <div class="d-flex my-2">
    <product-configurator-stepper-steps
      class="steps align-self-center"
      :steps="steps"
      :current-step="step"
      @back="step = $event"
    />
    <product-configurator-stepper-content
      class="align-self-center"
      :selected-configurator="selectedConfigurator"
    />
  </div>
  <product-configurator-stepper-actions-next
    v-if="step < stepsCount"
    :selected-configurator="selectedConfigurator"
    @next="step += 1"
  />
  <product-configurator-stepper-actions-cart v-else />
</template>

<script lang="ts" setup>
import { useConfiguratorStore } from '@/store/configurator'
import type { Configurator } from '@/interfaces/product'

const step = ref(1)

const configuratorStore = useConfiguratorStore()
const { product } = storeToRefs(configuratorStore)

const configurator = computed(() => product.value?.configurator || [])

const selectedConfigurator = computed(
  () => configurator.value?.[step.value - 1] || {}
)

const newStepItem = (item: Configurator, index: number) => ({
  category: item.category,
  index: index + 1
})

const steps = computed(() => configurator.value?.map(newStepItem) || [])
const stepsCount = steps.value?.length || 0
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
