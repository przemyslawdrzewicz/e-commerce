<template>
  <v-btn variant="text" class="mb-4" :to="to">
    <v-icon class="mr-2">mdi-arrow-left</v-icon>
    {{ title }}
  </v-btn>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: 'Back'
  }
})
</script>
