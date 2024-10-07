<template>
  <div class="product-carousel">
    <div class="d-flex">
      <product-carousel-actions-previous
        v-show="display.smAndUp"
        :products="products"
        :selected-index="selectedIndex"
        @update-selected="setSelected($event)"
      />
      <product-carousel-details :selected="selected" />
      <product-carousel-actions-next
        v-show="display.smAndUp"
        :products="products"
        :selected-index="selectedIndex"
        @update-selected="setSelected($event)"
      />
    </div>
    <div v-show="display.mdAndUp" class="separator mt-12"></div>
    <product-carousel-list
      v-show="display.mdAndUp"
      :products="products"
      :selected="selected"
    />
    <div v-show="display.xs" class="d-flex justify-center my-5">
      <product-carousel-actions-previous
        v-show="display.xs"
        :products="products"
        :selected-index="selectedIndex"
        @update-selected="setSelected($event)"
      />
      <product-carousel-actions-next
        v-show="display.xs"
        class="ml-4"
        :products="products"
        :selected-index="selectedIndex"
        @update-selected="setSelected($event)"
      />
    </div>
  </div>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const DEFAULT_INDEX = 2

const props = defineProps({
  products: {
    type: Array,
    default: () => []
  }
})

const display = ref(useDisplay())

const selected = ref({})
const setSelected = value => (selected.value = value)

const { products } = props

onMounted(() => products.length && setSelected(products[DEFAULT_INDEX]))

const selectedIndex = computed(() =>
  products.findIndex(product => product.id === selected.value.id)
)
</script>
