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

<script lang="ts" setup>
import { useConfiguratorStore } from '@/store/configurator'
import type { Configurator } from '@/interfaces/product'

interface Props {
  selectedConfigurator: Configurator
}

const props = defineProps<Props>()

const emit = defineEmits<{
  next: []
}>()

const configuratorStore = useConfiguratorStore()
const { product } = storeToRefs(configuratorStore)

const configurator = computed(() => product.value?.configurator || [])

const { selectedConfigurator } = toRefs(props)

const isValid = computed(() => {
  const configuratorIndex = configurator.value.findIndex(
    ({ code }) => selectedConfigurator.value.code === code
  )

  return !!configurator.value[configuratorIndex].value
})

const next = () => emit('next')
</script>
