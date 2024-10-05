<template>
  <client-only>
    <div class="shopping-cart">
      <div class="cart">
        <div class="title mb-8 mt-13">Shopping cart</div>
        <cart :items="items" />
      </div>
    </div>
  </client-only>
</template>

<script setup>
import { useCartStore } from '@/store/cart'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()
const { items } = storeToRefs(cartStore)
</script>

<style scoped>
.shopping-cart {
  display: flex;
  justify-content: center;
  height: 80vh;
}

.cart {
  width: 1400px;
}

.title {
  font-size: 58px;
  font-weight: bold;
}
</style>
