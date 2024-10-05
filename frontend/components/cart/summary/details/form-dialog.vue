<template>
  <v-dialog
    :model-value="true"
    class="form-dialog"
    max-width="470"
    @update:model-value="updateDialog(false)"
  >
    <v-card class="pa-13 py-13">
      <div class="title mb-6">Contact details</div>
      <v-form ref="formRef">
        <v-row dense>
          <v-col cols="12">
            <div class="label">Full name</div>
            <v-text-field
              v-model="form.fullname"
              :rules="[requiredRule]"
              variant="outlined"
              density="compact"
            />
          </v-col>
          <v-col cols="12">
            <div class="label">Email</div>
            <v-text-field
              v-model="form.email"
              :rules="[requiredRule, emailRule]"
              placeholder="jan.kowalski@example.com"
              variant="outlined"
              density="compact"
            />
          </v-col>
          <v-col cols="12">
            <div class="label">Phone</div>
            <v-text-field
              v-model="form.phone"
              :rules="[requiredRule, phoneRule]"
              variant="outlined"
              density="compact"
            />
          </v-col>
          <v-col cols="12">
            <div class="label">Street</div>
            <v-text-field
              v-model="form.street"
              :rules="[requiredRule]"
              variant="outlined"
              density="compact"
            />
          </v-col>
          <v-col cols="4">
            <div class="label">Postal code</div>
            <v-text-field
              v-model="form.postalCode"
              :rules="[requiredRule, postalCodeRule]"
              placeholder="__-___"
              variant="outlined"
              density="compact"
            />
          </v-col>
          <v-col cols="8">
            <div class="label">City</div>
            <v-text-field
              v-model="form.city"
              :rules="[requiredRule]"
              variant="outlined"
              density="compact"
            />
          </v-col>
        </v-row>
        <v-btn
          class="mt-4"
          width="100%"
          color="black"
          height="50"
          @click="save"
        >
          Save
        </v-btn>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script setup>
import {
  requiredRule,
  emailRule,
  postalCodeRule,
  phoneRule
} from '@/utils/validationRules'
import { useCartStore } from '@/store/cart'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const cartStore = useCartStore()
const { contactDetails } = cartStore

const emit = defineEmits(['update:modelValue'])

const formRef = ref(null)
const form = ref({ ...contactDetails })

const validateForm = async () => {
  const { valid } = await formRef.value.validate()
  return valid
}

const save = async () => {
  const validate = await validateForm()
  if (!validate) return

  cartStore.setContactDetails({ ...form.value })
  updateDialog(false)
}

const updateDialog = value => emit('update:modelValue', value)
</script>

<style scoped>
.v-card {
  border-radius: 24px !important;

  .title {
    font-size: 32px;
    font-weight: 500;
  }
}
</style>
