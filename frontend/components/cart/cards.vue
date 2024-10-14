<template>
  <div class="cards">
    <v-card
      v-for="({ title, fullImage, configurator, price }, index) in items"
      :key="index"
      class="card px-1 py-2 mb-4"
      flat
    >
      <v-row>
        <v-col cols="4" class="d-flex justify-center">
          <img class="image" :src="fullImage" />
        </v-col>
        <v-col cols="8">
          <div class="title">{{ title }}</div>
          <div class="configuration">
            {{ configurationNames(configurator) }}
          </div>
          <div class="price">{{ formatPrice(price) }}</div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { formatPrice } from '@/utils/global'
import { configurationNames } from '@/utils/cart'
import type { Product } from '@/interfaces/product'

interface Props {
  items: Product[]
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
.cards {
  .card {
    border-radius: 20px !important;
  }

  .image {
    width: auto;
    height: 100px;
  }

  .title {
    font-size: 18px;
  }

  .configuration {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.555);
    margin-top: 8px;
  }

  .price {
    font-size: 14px;
    margin-top: 8px;
  }
}
</style>
