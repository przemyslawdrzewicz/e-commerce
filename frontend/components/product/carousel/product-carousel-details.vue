<template>
  <div class="details d-flex">
    <v-row class="align-self-center">
      <v-col cols="6" class="product">
        <div class="price">{{ selected.price }} PLN</div>
        <div class="title">{{ selected.title }}</div>
        <div class="description mt-6 mb-10">
          {{ selected.description }}
        </div>
        <hr class="separator mb-10" />
        <v-btn class="configurator-btn" color="black" width="200">
          Configurator
        </v-btn>
      </v-col>
      <v-col cols="6" class="photo">
        <div class="circle"></div>
        <img :src="selected.image" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const props = defineProps({
  selected: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped>
.details {
  margin-left: 200px;
  margin-right: 200px;
  height: 50vh;

  .product {
    .title {
      font-size: 58px;
      font-weight: bold;
    }

    .price {
      font-size: 16px;
      font-weight: bold;
    }

    .description {
      font-weight: light;
      font-size: 16px;
      line-height: 29px;
    }

    .separator {
      width: 60px;
      height: 6px;
      background: black;
      border-radius: 2px;
    }

    .configurator-btn {
      font-size: 12px !important;
    }
  }

  .photo {
    position: relative;

    .circle {
      position: absolute;
      width: 250px;
      height: 250px;
      border-radius: 50%;
      background: #f6f6f6;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 450px;
      height: 450px;
    }
  }
}
</style>
