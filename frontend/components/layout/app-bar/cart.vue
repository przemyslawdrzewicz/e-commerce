<template>
  <v-btn variant="text" icon to="/cart" :active="false">
    <v-badge v-if="items.length" :content="items.length">
      <icons-cart />
    </v-badge>
    <icons-cart v-else />
  </v-btn>
</template>

<script setup>
import { useCartStore } from '@/store/cart'
const cartStore = useCartStore()

const { items } = toRefs(cartStore)
</script>
