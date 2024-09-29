<template>
  <v-card width="350" height="60vh" class="pa-12 summary">
    <div class="title mb-6">Order summary</div>
    <div class="d-flex justify-space-between">
      <div>Items (4)</div>
      <div>$225</div>
    </div>
    <div class="mt-5">
      <div class="mb-4">Shipping</div>
      <v-select
        v-model="delivery"
        variant="outlined"
        height="40"
        density="compact"
        :items="deliveries"
      />
    </div>
    <div class="mt-2">
      <div class="mb-4">Promo code</div>
      <v-text-field
        v-model="promoCode"
        variant="outlined"
        height="40"
        density="compact"
        placeholder="Enter your code"
      />
    </div>
    <div class="d-flex justify-space-between mt-2 mb-6 total">
      <div>Total price</div>
      <div>$225</div>
    </div>
    <v-btn width="100%" color="black">Buy</v-btn>
  </v-card>
</template>

<script setup>
const delivery = ref(null)
const deliveries = [
  {
    title: 'Standard delivery',
    value: 'standard'
  }
]

const promoCode = ref('')
</script>

<style>
.summary {
  border-radius: 20px !important;
  font-weight: 300;

  .title {
    font-size: 24px;
    font-weight: 500;
  }

  .total {
    font-weight: 400;
  }
}
</style>
