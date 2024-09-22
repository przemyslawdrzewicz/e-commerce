<template>
  <div class="product">
    <product-configurator
      class="align-self-center"
      :title="product.title"
      :price="product.price"
      :image="product.image"
      :configurator="product.configurator"
    />
  </div>
</template>

<script setup>
const product = {
  id: 1,
  title: 'Chair III',
  price: '144',
  description:
    'A chair is a type of seat, typically designed for one person and consisting of one or more legs.',
  image: '/products/chair.png',
  additional_images: ['/products/chair.png'],
  code: 'chair-iii',
  configurator: [
    {
      id: 1,
      category: 'Width',
      type: 'number',
      code: 'width',
      params: {
        placeholder: 'cm'
      }
    },
    {
      id: 2,
      category: 'Seat',
      type: 'color',
      colors: ['#6DB7BB'],
      code: 'seat2'
    },
    {
      id: 3,
      category: 'Seat',
      type: 'color',
      colors: ['#6DB7BB'],
      code: 'seat3'
    }
  ]
}
</script>

<style scoped lang="scss">
.product {
  margin-left: 180px;
  display: flex;
  justify-content: center;
  height: 80vh;
}
</style>
