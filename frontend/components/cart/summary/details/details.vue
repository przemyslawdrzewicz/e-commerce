<template>
  <v-btn
    v-if="!isContactDetails"
    color="primary"
    width="100%"
    variant="outlined"
    height="40"
    @click="setFormModel(true)"
  >
    Add information
  </v-btn>
  <v-card
    v-else
    variant="outlined"
    class="pa-4 details"
    @click="setFormModel(true)"
  >
    <div>{{ contactDetails.fullname }}</div>
    <div>
      {{ contactDetails.street }}, {{ contactDetails.postalCode }}
      {{ contactDetails.city }}
    </div>
    <div>{{ contactDetails.email }}</div>
    <div>tel. {{ contactDetails.phone }}</div>
  </v-card>
  <div v-show="isErrorMessage" class="text-error error mt-2 ml-5">
    Fill contact data
  </div>
  <cart-summary-details-form-dialog v-if="formModel" v-model="formModel" />
</template>

<script setup>
import { useCartStore } from '@/store/cart'

const cartStore = useCartStore()
const { contactDetails } = toRefs(cartStore)

const formModel = ref(false)
const setFormModel = value => (formModel.value = value)

const isErrorMessage = ref(false)

const isContactDetails = computed(() => contactDetails.value.fullname)

const validate = () => {
  isErrorMessage.value = !isContactDetails.value
  return !!isContactDetails.value
}

defineExpose({ validate })
</script>

<style scoped>
.details {
  font-size: 14px;
}
</style>
