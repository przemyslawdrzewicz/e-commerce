<template>
  <div>
    <div v-for="(item, index) in product.configurator" :key="index">
      <div>{{ item.category }}</div>
      <div class="my-4">
        <product-configurator-stepper-controls-colors
          v-if="item.type === TYPES.COLOR"
          v-model="item.value"
          :colors="item.colors"
        />
        <product-configurator-stepper-controls-number
          v-else-if="item.type === TYPES.NUMBER"
          v-model="item.value"
          :params="item.params"
        />
      </div>
    </div>
    <product-configurator-stepper-actions-cart
      :product="product"
      width="100%"
    />
  </div>
</template>

<script setup>
import { useConfiguratorStore } from '@/store/configurator'

const TYPES = {
  COLOR: 'color',
  NUMBER: 'number'
}

// const props = defineProps({
//   configurator: {
//     type: Array,
//     default: () => []
//   },
//   product: {
//     type: Object,
//     default: () => {}
//   }
// })

const configuratorStore = useConfiguratorStore()
const { product } = toRefs(configuratorStore)

// const { configurator } = toRefs(product.configurator)
</script>
