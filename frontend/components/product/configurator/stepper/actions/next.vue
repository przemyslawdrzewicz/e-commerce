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
import { useConfiguratorStore } from '@/store/configurator'

const props = defineProps({
  selectedConfigurator: {
    type: Object,
    default: () => {}
  }
})

const emit = defineEmits(['next'])

const configuratorStore = useConfiguratorStore()
const { product } = toRefs(configuratorStore)
const { configurator } = toRefs(product.value)
const { selectedConfigurator } = toRefs(props)

const isValid = computed(() => {
  const configuratorIndex = configurator.value.findIndex(
    ({ code }) => selectedConfigurator.value.code === code
  )
  return !!configurator.value[configuratorIndex].value
})

const next = () => emit('next')
</script>
