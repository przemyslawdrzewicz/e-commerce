<template>
  <div>
    <div class="price">{{ price }} PLN</div>
    <div class="title">{{ title }}</div>
    <div class="type text-primary mt-2 mb-6">CONFIGURATOR</div>
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
  }
})
</script>

<style lang="scss" scoped>
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
</style>
