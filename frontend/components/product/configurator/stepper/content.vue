<template>
  <product-configurator-stepper-controls-colors
    v-if="selectedConfigurator.type === Types.Color"
    v-model="configurator[configuratorIndex].value"
    :colors="selectedConfigurator.colors"
  />
  <product-configurator-stepper-controls-number
    v-else-if="selectedConfigurator.type === Types.Number"
    v-model="configurator[configuratorIndex].value"
    :params="selectedConfigurator.params"
  />
</template>

<script lang="ts" setup>
import { useConfiguratorStore } from '@/store/configurator'
import { Types } from '@/enums/configurator/fields'

const props = defineProps({
  selectedConfigurator: {
    type: Object,
    default: () => {}
  }
})

const { selectedConfigurator } = toRefs(props)

const configuratorStore = useConfiguratorStore()
const { product } = storeToRefs(configuratorStore)

const configurator = computed(() => product.value?.configurator || [])

const configuratorIndex = computed(() =>
  configurator.value.findIndex(
    ({ code }) => code === selectedConfigurator.value.code
  )
)
</script>
