<template>
  <v-btn class="align-self-center" icon @click="next">
    <v-icon>mdi-chevron-right</v-icon>
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

const next = () => {
  const selectedProductIndex = products.value.findIndex(
    product => product.id === selectedProduct.value?.id
  )

  const newIndex = selectedProductIndex + 1
  const FIRST_INDEX = 0
  const newSelected = products.value[newIndex <= 3 ? newIndex : FIRST_INDEX]

  emit('update-selected', newSelected)
}
</script>
