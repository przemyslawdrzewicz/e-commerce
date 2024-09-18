<template>
  <div class="d-flex">
    <div class="photo">
      <div class="circle"></div>
      <img :src="image" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.photo {
  position: relative;

  .circle {
    position: absolute;
    width: 350px;
    height: 350px;
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
    width: 600px;
    height: 600px;
  }
}
</style>
