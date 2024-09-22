<template>
  <div class="d-flex">
    <div
      v-for="({ color }, index) in colors"
      :key="index"
      class="mr-2"
      @click="changeColor(color)"
    >
      <div
        class="color-border d-flex justify-center"
        :style="{ border: border(color) }"
      >
        <div
          class="color align-self-center"
          :style="{ background: color }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  colors: {
    type: Array,
    default: () => []
  }
})

const model = defineModel()
const changeColor = color => (model.value = color)
const border = color => (model.value === color ? `2px solid ${color}` : 'none')
</script>

<style lang="scss" scoped>
.color-border {
  border-radius: 50%;
  width: 45px;
  height: 45px;
}

.color {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
