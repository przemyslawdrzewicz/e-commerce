<template>
  <data-table :headers="headers" :items="items">
    <template #product="{ item }">
      <div class="d-flex">
        <img class="image" :src="item.image" />
        <div class="align-self-center">
          <div>{{ item.name }}</div>
          <div>{{ item.configurations }}</div>
        </div>
      </div>
    </template>
    <template #actions="{ item }">
      <cart-actions-delete :item="item" />
    </template>
  </data-table>
  <div class="d-flex justify-space-between mt-7">
    <v-btn variant="text" to="/products/">
      <v-icon class="mr-2">mdi-arrow-left</v-icon>
      Continue shopping
    </v-btn>
    <data-table-pagination />
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Object,
    default: () => {}
  }
})

const headers = [
  { title: 'Product', value: 'product' },
  { title: 'Quantity', value: 'quantity' },
  { title: 'Total price', value: 'price', class: 'text-right' }
]
</script>

<style scoped>
.image {
  width: 100px;
}
</style>
