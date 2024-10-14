<template>
  <v-row>
    <v-col cols="12" sm="6" md="8">
      <cart-table v-if="display.mdAndUp" :items="items" />
      <cart-cards v-else :items="items" />
    </v-col>
    <v-col cols="12" sm="6" md="4" class="d-flex justify-center">
      <cart-summary :items="items" />
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import type { Product } from '@/interfaces/product'

const display = ref(useDisplay())

interface Props {
  items: Product[]
}

const props = defineProps<Props>()
</script>
