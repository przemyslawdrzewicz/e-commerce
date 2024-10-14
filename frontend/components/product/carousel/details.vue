<template>
  <div class="details">
    <v-row>
      <v-col cols="12" md="6" class="product">
        <div>
          <div class="price">{{ formatPrice(price) }}</div>
          <div class="title">{{ title }}</div>
          <div class="description mt-6 mb-10">
            {{ description }}
          </div>
          <hr class="separator mb-10" />
          <v-btn
            v-show="display.mdAndUp"
            class="configurator-button"
            color="black"
            :to="`/products/${code}`"
            width="200"
          >
            Configurator
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="photo">
        <div class="circle"></div>
        <img :src="image" />
      </v-col>
      <v-row v-show="display.smAndDown">
        <v-col cols="12" class="mt-2">
          <v-btn
            class="configurator-btn mt-15"
            color="black"
            :to="`/products/${code}`"
            width="100%"
          >
            Configurator
          </v-btn>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import { formatPrice } from '@/utils/global'
import type { Product } from '@/interfaces/product'

interface Props {
  selected: Product | null
}

const props = defineProps<Props>()

const { selected } = toRefs(props)

const title = computed(() => selected.value?.title)
const description = computed(() => selected.value?.description)
const code = computed(() => selected.value?.code)
const price = computed(() => selected.value?.price)
const image = computed(() => selected.value?.image)

const display = ref(useDisplay())
</script>

<style lang="scss" scoped>
@import '@/assets/scss/breakpoints';

.details {
  width: 100%;
  margin-left: 140px;
  margin-right: 140px;

  @media (max-width: $sm) {
    margin-left: 0;
    margin-right: 0;
  }

  @media (min-width: $sm) and (max-width: $md) {
    margin-left: 40px;
    margin-right: 40px;
  }

  @media (min-width: $md) and (max-width: 1000px) {
    margin-left: 80px;
    margin-right: 80px;
  }

  .product {
    .title {
      font-size: 58px;
      font-weight: bold;

      @media (min-width: $md) {
        font-size: 67px;
      }
    }

    .price {
      font-size: 16px;
      font-weight: bold;

      @media (min-width: $md) {
        font-size: 18px;
      }
    }

    .description {
      font-weight: light;
      font-size: 16px;
      line-height: 29px;
      width: 300px;

      @media (min-width: $md) {
        font-size: 18px;
        width: 320px;
      }

      @media (min-width: 1200px) {
        font-size: 18px;
        width: 360px;
      }
    }

    .separator {
      width: 60px;
      height: 6px;
      background: black;
      border-radius: 2px;
    }
  }

  .photo {
    position: relative;

    @media (max-width: $md) {
      height: 300px;
    }

    .circle {
      position: absolute;
      border-radius: 50%;
      background: #f6f6f6;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 14vw;
      height: 14vw;

      @media (max-width: $md) {
        width: 250px;
        height: 250px;
      }

      @media (min-width: $md) and (max-width: $lg) {
        min-width: 200px;
        min-height: 200px;
      }
    }

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      width: 100%;
      max-width: 380px;
      max-height: 380px;

      @media (min-width: $md) {
        width: 550px;
        height: 500px;
      }
    }
  }

  .configurator-button {
    font-size: 12px !important;
  }
}
</style>
