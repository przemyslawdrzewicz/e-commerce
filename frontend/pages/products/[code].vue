<template>
  <div class="product">
    <product-configurator
      class="align-self-center"
      :title="product.title"
      :price="product.price"
      :image="product.image"
      :configurator="product.configurator"
    />
  </div>
</template>

<script setup>
const { data: product } = await useFetch('/api/products/sofia/')
</script>

<style scoped lang="scss">
.product {
  margin-left: 180px;
  display: flex;
  justify-content: center;
  height: 80vh;
}
</style>
