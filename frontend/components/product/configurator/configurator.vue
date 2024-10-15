<template>
  <div class="product-configurator mb-10">
    <v-row>
      <v-col cols="12" md="6">
        <actions-back title="Back" to="/products" />
        <product-configurator-details />
        <hr class="separator" />
        <product-configurator-photo v-if="display.smAndDown" />
        <product-configurator-stepper v-if="display.mdAndUp" />
        <product-configurator-stepper-mobile v-else class="mt-10" />
      </v-col>
      <v-col
        v-if="display.mdAndUp"
        cols="12"
        md="6"
        class="d-flex justify-center"
      >
        <product-configurator-photo class="align-self-center" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify'

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
