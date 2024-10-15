<template>
  <div>
    <div v-for="(item, index) in configurator" :key="index">
      <div>{{ item.category }}</div>
      <div class="my-4">
        <product-configurator-stepper-controls-colors
          v-if="item.type === Types.Color"
          v-model="item.value"
          :colors="item.colors || []"
        />
        <product-configurator-stepper-controls-number
          v-else-if="item.type === Types.Color"
          v-model="item.value"
          :params="item.params || {}"
        />
      </div>
    </div>
    <product-configurator-stepper-actions-cart
      :product="product"
      width="100%"
    />
  </div>
</template>

<script lang="ts" setup>
import { useConfiguratorStore } from '@/store/configurator'
import { Types } from '@/enums/configurator/fields'

const configuratorStore = useConfiguratorStore()
const { product } = storeToRefs(configuratorStore)

const configurator = computed(() => product.value?.configurator || [])
</script>
