<template>
  <div class="photo">
    <div class="circle"></div>
    <img class="img" :src="selectedImage" />
  </div>
</template>

<script setup>
import { useConfiguratorStore } from '@/store/configurator'

const configuratorStore = useConfiguratorStore()
const { product } = toRefs(configuratorStore)
const { configurator, image } = toRefs(product.value)

const selectedImage = computed(() => {
  if (!product.value) return ''

  let newImage = image.value

  configurator.value.forEach(({ code, value, colors }) => {
    if (colors) newImage = newImage.replace(`{${code}}`, value)
  })

  return newImage
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/breakpoints';

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
    width: 300px;
    height: 300px;

    @media (max-width: $md) {
      width: 250px;
      height: 250px;
    }

    @media (min-width: $md) and (max-width: $lg) {
      min-width: 200px;
      min-height: 200px;
    }
  }

  .img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 380px;
    max-height: 380px;
    min-width: 380px;
    min-height: 380px;

    @media (min-width: $md) {
      min-width: 500px;
      min-height: 500px;

      max-width: 600px;
      max-height: 600px;
    }
  }
}
</style>
