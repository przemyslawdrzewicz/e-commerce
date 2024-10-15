<template>
  <div class="container">
    <div class="content">
      <product-configurator v-if="product" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useConfiguratorStore } from '@/store/configurator'
import type { Product } from '@/interfaces/product'

const configuratorStore = useConfiguratorStore()

const product = ref<Product | null>()

const getProduct = async () => {
  try {
    product.value = await $fetch<Product>('/api/products/sofia/')
    saveDefaultCartToStore()
  } catch (e) {
    console.log(e, 'error')
  }
}

const saveDefaultCartToStore = () => {
  if (!product.value) throw new Error('Product not found')
  configuratorStore.changeProduct(product.value)
}

onMounted(() => getProduct())
</script>

<style lang="scss" scoped>
@import '@/assets/scss/breakpoints';

.container {
  min-height: 91vh;
  display: flex;
  justify-content: center;

  .content {
    align-self: center;
    width: 100%;

    @media (max-width: $md) {
      align-self: flex-start;
      margin-top: 40px;

      padding-left: 20px;
      padding-right: 20px;
    }

    @media (min-width: $md) {
      width: 1000px;
    }
  }
}
</style>
