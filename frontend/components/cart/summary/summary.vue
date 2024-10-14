<template>
  <v-card width="350" class="pa-12 summary">
    <div class="title mb-6">Order summary</div>
    <div class="d-flex justify-space-between">
      <div>Items ({{ items.length }})</div>
      <div>{{ formatPrice(productsPrice) }}</div>
    </div>
    <v-form>
      <div class="mt-5">
        <div class="label">Shipping</div>
        <v-select
          v-model="delivery"
          variant="outlined"
          height="40"
          density="compact"
          :items="deliveries"
        />
      </div>
      <div class="mb-6">
        <div class="label">Payment information</div>
        <cart-summary-details />
      </div>
    </v-form>
    <div class="d-flex justify-space-between mt-2 mb-6 total">
      <div>Total price</div>
      <div>{{ formatPrice(total) }}</div>
    </div>
    <v-btn width="100%" color="black" :disabled="isSaveDisabled" @click="buy">
      Buy
    </v-btn>
  </v-card>
</template>

<script lang="ts" setup>
import { formatPrice } from '@/utils/global'
import { useCartStore } from '@/store/cart'
import type { Product } from '@/interfaces/product'

interface Props {
  items: Product[]
}

interface Deliveries {
  title: string
  value: string
  price: number
}

const props = defineProps<Props>()

const cartStore = useCartStore()
const router = useRouter()

const { delivery, contactDetails } = storeToRefs(cartStore)
const { items } = toRefs(props)

const deliveries: Deliveries[] = [
  {
    title: 'Standard delivery',
    value: 'standard',
    price: 0
  },
  {
    title: 'Quick delivery',
    value: 'quick',
    price: 15
  }
]

const isSaveDisabled = computed(
  () => !items.value.length || !contactDetails.value.fullname
)

const buy = () => {
  console.log('buy')

  router.push('/order-success')
}

const productsPrice = computed(() =>
  items.value.reduce((acc, curr) => acc + Number(curr.price), 0)
)

const deliveryPrice = computed(() => {
  if (!delivery.value) return 0

  const deliveryItem = deliveries.find(({ value }) => value === delivery.value)
  return deliveryItem?.price || 0
})

const total = computed(() => productsPrice.value + deliveryPrice.value)
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
