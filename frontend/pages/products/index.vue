<template>
  <div>
    <product-carousel :products="products" />
  </div>
</template>

<script setup>
const products = [
  {
    id: 1,
    title: 'Bowl',
    price: '144',
    description:
      'A chair is a type of seat, typically designed for one person and consisting of one or more legs.',
    image: '/products/bowl.png',
    code: 'bowl'
  },
  {
    id: 2,
    title: 'Robin',
    price: '225',
    description:
      'A chair is a type of seat, typically designed for one person and consisting of one or more legs.',
    image: '/products/robin.png',
    code: 'robin'
  },
  {
    id: 3,
    title: 'Sofia',
    price: '650',
    description:
      'A chair is a type of seat, typically designed for one person and consisting of one or more legs.',
    image: '/products/sofia.png',
    code: 'sofia'
  },
  {
    id: 4,
    title: 'CHR',
    price: '225',
    description:
      'A chair is a type of seat, typically designed for one person and consisting of one or more legs.',
    image: '/products/sofia.png',
    code: 'chr'
  }
]
</script>
