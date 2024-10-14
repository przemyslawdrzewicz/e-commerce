<template>
  <v-row>
    <v-col
      v-for="{ image, id } in products"
      :key="id"
      cols="3"
      class="d-flex justify-center"
    >
      <img :src="image" />
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import type { Product } from '@/interfaces/product'

interface Props {
  products: Product[]
}

const props = defineProps<Props>()
</script>

<style scoped lang="scss">
img {
  width: 180px;
  height: 180px;
}
</style>
