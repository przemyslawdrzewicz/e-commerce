<template>
  <div class="products mt-10">
    <product-carousel :products="products" />
  </div>
</template>

<script setup>
const products = [
  {
    id: 1,
    title: 'Chair III',
    price: '144',
    description:
      'A chair is a type of seat, typically designed for one person and consisting of one or more legs.',
    image: '/products/chair.png'
  },
  {
    id: 2,
    title: 'Robin',
    price: '225',
    description:
      'A chair is a type of seat, typically designed for one person and consisting of one or more legs.',
    image: '/products/chair.png'
  },
  {
    id: 3,
    title: 'Sofia',
    price: '650',
    description:
      'A chair is a type of seat, typically designed for one person and consisting of one or more legs.',
    image: '/products/chair.png'
  },
  {
    id: 4,
    title: 'CHR',
    price: '225',
    description:
      'A chair is a type of seat, typically designed for one person and consisting of one or more legs.',
    image: '/products/chair.png'
  }
]
</script>

<style scoped lang="scss">
.products {
  // margin-left: 65px;
  // margin-right: 65px;
  display: flex;
  justify-content: center;
}
</style>
