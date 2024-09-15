<template>
  <div>
    <v-btn
      v-for="{ title, category } in buttons"
      :key="category"
      :to="{ path: '/products', query: { category } }"
    >
      {{ title }}
    </v-btn>
  </div>
</template>

<script setup>
const buttons = computed(() => [
  {
    title: 'Living room',
    category: 'living-room'
  },
  {
    title: 'Office',
    category: 'office'
  },
  {
    title: 'Kitchen',
    category: 'kitchen'
  }
])
</script>
