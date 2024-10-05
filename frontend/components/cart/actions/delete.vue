<template>
  <v-btn variant="text" icon @click="deleteCartItem">
    <icons-trash />
  </v-btn>
</template>

<script setup>
import { useCartStore } from '@/store/cart'
const cartStore = useCartStore()

const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})

const deleteCartItem = () => {
  const { item } = props
  cartStore.removeItem(item)
}
</script>
