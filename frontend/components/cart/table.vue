<template>
  <data-table :headers="headers" :items="items">
    <template #product="{ item }">
      <div class="d-flex">
        <img class="image" :src="item.fullImage" />
        <div class="align-self-center">
          <div>{{ item.title }}</div>
          <div>{{ configurationNames(item.configurator) }}</div>
        </div>
      </div>
    </template>
    <template #actions="{ item }">
      <cart-actions-delete :item="item" />
    </template>
  </data-table>
  <div class="d-flex justify-space-between mt-7">
    <actions-back title="Continue shopping" to="/products" />
    <data-table-pagination />
  </div>
</template>

<script setup>
import { configurationNames } from '@/utils/cart'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

const headers = [
  { title: 'Product', value: 'product' },
  { title: 'Total price', value: 'price', class: 'text-right', type: 'price' }
]
</script>

<style scoped>
.image {
  width: 100px;
}
</style>
