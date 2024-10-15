<template>
  <div class="container">
    <div class="content">
      <product-carousel :products="products?.results || []" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from '@/interfaces/product'

interface ProductFetch {
  results: Product[]
}

const { data: products } = await useFetch<ProductFetch>(
  '/api/products/products/'
)
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
    }

    @media (max-width: $lg) {
      padding-left: 20px;
      padding-right: 20px;
    }

    @media (min-width: $lg) {
      width: 1200px;
    }
  }
}
</style>
