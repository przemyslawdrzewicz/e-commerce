<template>
  <div class="d-flex">
    <div
      v-for="({ color, code }, index) in colors"
      :key="index"
      class="mr-2"
      @click="changeColor(code)"
    >
      <div
        class="color-border d-flex justify-center"
        :style="colorStyles(code, color)"
      >
        <div
          class="color align-self-center"
          :style="{ background: color }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Color } from '@/interfaces/product'

interface Props {
  colors: Color[]
}

const props = defineProps<Props>()

const model = defineModel()
const changeColor = (code: string) => (model.value = code)
const colorStyles = (code: string, color: string) => ({
  border: model.value === code ? `2px solid ${color}` : 'none'
})
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
