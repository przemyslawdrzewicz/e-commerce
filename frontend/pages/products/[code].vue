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
  image: '/products/chair-iii/chair-{seat}-{legs}.png',
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
      colors: [
        { code: 'white', color: '#D9D9D3' },
        { code: 'green', color: '#46BB9C' }
      ],
      value: '#D9D9D3',
      code: 'seat'
    },
    {
      id: 3,
      category: 'Legs',
      type: 'color',
      colors: [{ code: 'yellow', color: '#6DB7BB' }],
      value: '#6DB7BB',
      code: 'legs'
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
