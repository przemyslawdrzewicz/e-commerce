<template>
  <div>
    <div class="price">{{ formatPrice(price) }}</div>
    <div class="title">{{ title }}</div>
    <div class="type text-primary mt-2 mb-6">CONFIGURATOR</div>
  </div>
</template>

<script setup>
import { formatPrice } from '@/utils/global'
import { useConfiguratorStore } from '@/store/configurator'

const configuratorStore = useConfiguratorStore()
const { product } = toRefs(configuratorStore)
const { title, price } = toRefs(product.value)
</script>

<style lang="scss" scoped>
.title {
  font-size: 58px;
  font-weight: bold;
}

.price {
  font-size: 16px;
  font-weight: bold;
}

.type {
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 3px;
}
</style>
