<template>
  <div>
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
    <div v-show="display.mdAndUp" class="line-separator mt-12"></div>
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

<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import type { Product } from '@/interfaces/product'

interface Props {
  products: Product[]
}

const props = defineProps<Props>()

const DEFAULT_INDEX = 2

const display = ref(useDisplay())

const selected = ref<Product | null>(null)
const setSelected = (value: Product) => (selected.value = value)

const { products } = props

const selectedIndex = computed(() =>
  products.findIndex(product => product.id === selected.value?.id)
)

onMounted(() => products.length && setSelected(products[DEFAULT_INDEX]))
</script>
