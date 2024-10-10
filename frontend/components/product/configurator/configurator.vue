<template>
  <div class="product-configurator mb-10">
    <v-row>
      <v-col cols="12" md="6">
        <v-btn variant="text" width="80" class="mb-4" to="/products">
          <v-icon class="mr-2">mdi-arrow-left</v-icon>
          Back
        </v-btn>
        <product-configurator-details
          :title="product.title"
          :price="product.price"
        />
        <hr class="separator" />
        <product-configurator-photo
          v-if="display.smAndDown"
          :configurator="product.configurator"
          :image="product.image"
        />
        <product-configurator-stepper
          v-if="display.mdAndUp"
          :product="product"
        />
        <product-configurator-stepper-mobile
          v-else
          class="mt-10"
          :configurator="product.configurator"
          :product="product"
        />
      </v-col>
      <v-col
        v-if="display.mdAndUp"
        cols="12"
        md="6"
        class="d-flex justify-center"
      >
        <product-configurator-photo
          class="align-self-center"
          :configurator="product.configurator"
          :image="product.image"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const props = defineProps({
  product: {
    type: Object,
    default: () => {}
  }
})

const display = ref(useDisplay())
</script>

<style lang="scss" scoped>
@import '@/assets/scss/breakpoints';

.product-configurator {
  margin-left: 200px;

  @media (max-width: $md) {
    margin-left: 0;
  }
}
</style>
