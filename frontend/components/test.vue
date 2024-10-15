<template>
  <div>{{ malpa }}</div>
</template>

<script lang="ts" setup>
import type { Product } from '@/interfaces/product'

interface Props {
  products: Product[]
}

const props = defineProps<Props>()

const { products } = toRefs(props)

const [firstElement] = products.value

const malpa = firstElement.title

// const myVariable = ref('test')

// const fun = (data: number) => {
//   return data
// }
</script>
