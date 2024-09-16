<template>
  <div class="product-carousel">
    <div class="d-flex">
      <product-carousel-actions-previous
        :products="products"
        :selected-index="selectedIndex"
        @update-selected="setSelected($event)"
      />
      <product-carousel-details :selected="selected" />
      <product-carousel-actions-next
        :products="products"
        :selected-index="selectedIndex"
        @update-selected="setSelected($event)"
      />
    </div>
    <hr class="separator mt-12" />
    <product-carousel-list :products="products" :selected="selected" />
  </div>
</template>

<script setup>
const DEFAULT_INDEX = 2

const props = defineProps({
  products: {
    type: Array,
    default: () => []
  }
})

const selected = ref({})
const setSelected = value => (selected.value = value)

const { products } = props

onMounted(() => products.length && setSelected(products[DEFAULT_INDEX]))

const selectedIndex = computed(() =>
  products.findIndex(product => product.id === selected.value.id)
)
</script>

<style lang="scss" scoped>
.product-carousel {
  width: 1100px;
}
</style>
