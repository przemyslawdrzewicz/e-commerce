<template>
  <div class="product-carousel">
    <div class="d-flex">
      <v-btn class="align-self-center" icon @click="previous">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <product-carousel-details :selected="selected" />
      <v-btn class="align-self-center" icon @click="next">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
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

onMounted(() => {
  products.length && setSelected(products[DEFAULT_INDEX])
})

const selectedIndex = computed(() =>
  products.findIndex(product => product.id === selected.value.id)
)

const previous = () => {
  const newIndex = selectedIndex.value - 1
  const lastIndex = 3
  setSelected(products[newIndex >= 0 ? newIndex : lastIndex])
}

const next = () => {
  const newIndex = selectedIndex.value + 1
  const firstIndex = 0
  setSelected(products[newIndex <= 3 ? newIndex : firstIndex])
}
</script>

<style lang="scss" scoped>
.product-carousel {
  width: 1100px;
}
</style>
