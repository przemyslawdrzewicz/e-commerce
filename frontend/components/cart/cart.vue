<template>
  <v-row>
    <v-col cols="12" md="8">
      <cart-table v-if="display.mdAndUp" :items="items" />
      <cart-cards v-else :items="items" />
    </v-col>
    <v-col cols="12" md="4" class="d-flex justify-center">
      <cart-summary :items="items" />
    </v-col>
  </v-row>
</template>

<script setup>
import { useDisplay } from 'vuetify'
const display = ref(useDisplay())

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
</script>
