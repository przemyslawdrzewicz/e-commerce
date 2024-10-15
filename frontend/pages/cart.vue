<template>
  <client-only>
    <div class="shopping-cart">
      <div class="cart">
        <actions-back
          v-if="display.smAndDown"
          class="mb-2"
          title="Continue shopping"
          to="/products"
        />

        <div class="title mb-8">Shopping cart</div>
        <cart :items="items" />
      </div>
    </div>
  </client-only>
</template>

<script lang="ts" setup>
import { useCartStore } from '@/store/cart'
import { useDisplay } from 'vuetify'

const display = ref(useDisplay())

const cartStore = useCartStore()
const { items } = storeToRefs(cartStore)
</script>

<style lang="scss" scoped>
@import '@/assets/scss/breakpoints';

.shopping-cart {
  display: flex;
  justify-content: center;
  min-height: 91vh;

  .cart {
    align-self: center;
    width: 100%;

    .title {
      font-size: 58px;
      font-weight: bold;
    }

    @media (max-width: $md) {
      align-self: flex-start;
      margin-top: 40px;
    }

    @media (max-width: $lg) {
      padding-left: 20px;
      padding-right: 20px;
    }

    @media (min-width: $lg) {
      width: 1400px;
    }
  }
}
</style>
