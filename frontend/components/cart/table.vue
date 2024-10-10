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
    type: Array,
    default: () => []
  }
})

const headers = [
  { title: 'Product', value: 'product' },
  { title: 'Quantity', value: 'quantity' },
  { title: 'Total price', value: 'price', class: 'text-right', type: 'price' }
]

const configurationNames = configurator => {
  const getColorName = (category, value, colors) => {
    const { code } = colors.find(({ code }) => code === value)
    return `${category} ${code}`
  }

  const getNumberName = (category, value, placeholder) =>
    `${category} ${value} ${placeholder}`

  const getFieldName = (category, value) => `${category} ${value}`

  return configurator
    .map(({ type, category, value, params, colors }) => {
      switch (type) {
        case 'color':
          return getColorName(category, value, colors)
        case 'number':
          return getNumberName(category, value, params?.placeholder)
        default:
          return getFieldName(category, value)
      }
    })
    .join(', ')
}
</script>

<style scoped>
.image {
  width: 100px;
}
</style>
