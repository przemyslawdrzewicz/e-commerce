<template>
  <v-btn class="align-self-center" icon @click="previous">
    <v-icon>mdi-chevron-left</v-icon>
  </v-btn>
</template>

<script lang="ts" setup>
import type { Product } from '@/interfaces/product'

interface Props {
  products: Product[]
  selectedProduct: Product | null
}

const props = defineProps<Props>()

const { selectedProduct, products } = toRefs(props)

const emit = defineEmits(['update-selected'])

const previous = () => {
  const selectedProductIndex = products.value.findIndex(
    product => product.id === selectedProduct.value?.id
  )

  const newIndex = selectedProductIndex - 1
  const lastIndex = 3
  const newSelected = products.value[newIndex >= 0 ? newIndex : lastIndex]

  emit('update-selected', newSelected)
}
</script>
