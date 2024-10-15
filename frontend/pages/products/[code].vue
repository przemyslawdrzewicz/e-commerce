<template>
  <div class="container">
    <div class="content">
      <product-configurator v-if="!loading" />
    </div>
  </div>
</template>

<script setup>
import { useConfiguratorStore } from '@/store/configurator'
const configuratorStore = useConfiguratorStore()

const product = ref(null)
const loading = ref(true)

onMounted(() => getProduct())

const getProduct = async () => {
  try {
    product.value = await $fetch('/api/products/sofia/')
    saveDefaultCartToStore()
    loading.value = false
  } catch (e) {
    console.log(e, 'error')
  }
}

const saveDefaultCartToStore = () =>
  configuratorStore.changeProduct(product.value)
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
