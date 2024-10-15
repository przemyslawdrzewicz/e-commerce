<template>
  <v-btn class="align-self-center" icon @click="previous">
    <v-icon>mdi-chevron-left</v-icon>
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

const previous = () => {
  const newIndex = selectedIndex.value - 1
  const lastIndex = 3
  const newSelected = products.value[newIndex >= 0 ? newIndex : lastIndex]

  emit('update-selected', newSelected)
}
</script>
