<template>
  <v-row>
    <v-col cols="8">
      <cart-table :items="items" />
    </v-col>
    <v-col cols="4" class="d-flex justify-center">
      <cart-summary :items="items" />
    </v-col>
  </v-row>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
</script>
