<template>
  <test :products="data.results" />
</template>

<script setup>
const { data } = await useFetch('/api/products/products/')
</script>

<style scoped></style>
