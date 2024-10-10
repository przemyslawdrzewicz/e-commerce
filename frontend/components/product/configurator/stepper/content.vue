<template>
  <product-configurator-stepper-controls-colors
    v-if="selectedConfigurator.type === TYPES.COLOR"
    v-model="configurator[configuratorIndex].value"
    :colors="selectedConfigurator.colors"
  />
  <product-configurator-stepper-controls-number
    v-else-if="selectedConfigurator.type === TYPES.NUMBER"
    v-model="configurator[configuratorIndex].value"
    :params="selectedConfigurator.params"
  />
</template>

<script setup>
import { useConfiguratorStore } from '@/store/configurator'

const TYPES = {
  COLOR: 'color',
  NUMBER: 'number'
}

const props = defineProps({
  selectedConfigurator: {
    type: Object,
    default: () => {}
  }
})

const { selectedConfigurator } = toRefs(props)

const configuratorStore = useConfiguratorStore()
const { product } = toRefs(configuratorStore)
const { configurator } = toRefs(product.value)

const configuratorIndex = computed(() => {
  return configurator.value.findIndex(
    ({ code }) => code === selectedConfigurator.value.code
  )
})
</script>
