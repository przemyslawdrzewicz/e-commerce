<template>
  <div v-if="selectedConfigurator.type === TYPES.COLOR">
    <product-configurator-stepper-controls-colors
      v-model="config[selectedConfiguratorIndex].value"
      :colors="selectedConfigurator.colors"
    />
  </div>
  <div v-else-if="selectedConfigurator.type === TYPES.NUMBER">
    <product-configurator-stepper-controls-number
      v-model="config[selectedConfiguratorIndex].value"
      :params="config[selectedConfiguratorIndex].params"
    />
  </div>
</template>

<script setup>
const TYPES = {
  COLOR: 'color',
  NUMBER: 'number'
}

const props = defineProps({
  configurator: {
    type: Array,
    default: () => []
  },
  selectedConfigurator: {
    type: Object,
    default: () => {}
  }
})

const { configurator } = props
const config = ref([...configurator])

const selectedConfiguratorIndex = computed(() => {
  const { configurator, selectedConfigurator } = props
  return configurator.findIndex(item => item.id === selectedConfigurator.id)
})

defineExpose({ config })
</script>
