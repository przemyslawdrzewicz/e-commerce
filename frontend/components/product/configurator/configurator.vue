<template>
  <div class="product-configurator">
    <v-row class="details">
      <v-col cols="6" class="product">
        <div class="price">{{ product.price }} PLN</div>
        <div class="title">{{ product.title }}</div>
        <div class="type text-primary mt-2 mb-6">CONFIGURATOR</div>
        <hr class="separator" />
        <product-configurator-stepper :configurator="product.configurator" />
      </v-col>
      <v-col cols="6" class="d-flex justify-center">
        <product-configurator-photo
          class="align-self-center"
          :image="product.image"
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
</script>

<style lang="scss" scoped>
.product-configurator {
  width: 1200px;
}

.details {
  margin-left: 200px;
  margin-right: 200px;

  .product {
    .title {
      font-size: 58px;
      font-weight: bold;
    }

    .price {
      font-size: 16px;
      font-weight: bold;
    }

    .type {
      font-size: 24px;
      font-weight: 300;
      letter-spacing: 3px;
    }

    .description {
      font-weight: light;
      font-size: 16px;
      line-height: 29px;
    }

    .separator {
      width: 60px;
      height: 6px;
      background: black;
      border-radius: 2px;
    }

    .step-btn {
      font-size: 12px !important;
    }
  }
}
</style>
