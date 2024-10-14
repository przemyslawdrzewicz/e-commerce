<template>
  <v-btn class="align-self-center" icon @click="next">
    <v-icon>mdi-chevron-right</v-icon>
  </v-btn>
</template>

<script lang="ts" setup>
import type { Product } from '@/interfaces/product'

interface Props {
  products: Product[]
  selectedIndex: number
}

const props = defineProps<Props>()

const { selectedIndex, products } = toRefs(props)

const emit = defineEmits(['update-selected'])

const next = () => {
  const newIndex = selectedIndex.value + 1
  const FIRST_INDEX = 0
  const newSelected =
    products.value[newIndex <= 3 ? newIndex : FIRST_INDEX] || 0

  emit('update-selected', newSelected)
}
</script>
