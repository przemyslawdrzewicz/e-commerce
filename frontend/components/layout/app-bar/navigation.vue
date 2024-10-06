<template>
  <div>
    <v-btn
      v-for="{ title, category, to } in buttons"
      :key="category"
      :to="to"
      :active="false"
    >
      {{ title }}
    </v-btn>
  </div>
</template>

<script setup>
const buttons = computed(() => [
  {
    title: 'Living room',
    category: 'living-room',
    to: '/products/'
  },
  {
    title: 'Office',
    category: 'office',
    to: '/products/'
  },
  {
    title: 'Kitchen',
    category: 'kitchen',
    to: '/products/'
  }
])
</script>
