<template>
  <div class="product-configurator">
    <v-row class="content">
      <v-col cols="6">
        <hr class="separator" />
        <product-configurator-details :title="title" :price="price" />
        <product-configurator-stepper :configurator="configurator" />
      </v-col>
      <v-col cols="6" class="d-flex justify-center">
        <product-configurator-photo class="align-self-center" :image="image" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  price: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  configurator: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
.product-configurator {
  width: 1200px;

  .content {
    margin-left: 200px;
    margin-right: 200px;

    .separator {
      width: 60px;
      height: 6px;
      background: black;
      border-radius: 2px;
    }
  }
}
</style>
