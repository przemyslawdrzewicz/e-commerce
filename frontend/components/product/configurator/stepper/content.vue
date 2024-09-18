<template>
  <div>
    <div v-if="selectedConfigurator.type === TYPES.COLOR">
      <product-configurator-stepper-controls-colors
        v-model="config[selectedConfiguratorIndex].value"
        :colors="selectedConfigurator.colors"
      />
    </div>
  </div>
</template>

<script setup>
const TYPES = {
  COLOR: 'color'
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
</script>
