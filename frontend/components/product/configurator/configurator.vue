<template>
  <div class="product-configurator">
    <v-row>
      <v-col cols="6">
        <v-btn variant="text" width="80" class="mb-4" to="/products">
          <v-icon class="mr-2">mdi-arrow-left</v-icon>
          Back
        </v-btn>
        <product-configurator-details
          :title="product.title"
          :price="product.price"
        />
        <hr class="separator" />
        <product-configurator-stepper ref="stepper" :product="product" />
      </v-col>
      <v-col cols="6" class="d-flex justify-center">
        <product-configurator-photo
          class="align-self-center"
          :image="product.image"
          :config="config"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    default: () => {}
  }
})

const stepper = ref(null)
const config = computed(() => stepper.value?.config || [])
</script>

<style lang="scss" scoped>
.product-configurator {
  width: 800px;

  .separator {
    width: 60px;
    height: 6px;
    background: black;
    border-radius: 2px;
  }
}
</style>
