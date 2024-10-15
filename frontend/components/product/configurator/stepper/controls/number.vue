<template>
  <v-text-field
    v-model="model"
    variant="outlined"
    class="number-field"
    :label="params.placeholder"
    type="number"
    @keydown="validateNumbers"
  />
</template>

<script lang="ts" setup>
import type { Params } from '@/interfaces/product'

interface Props {
  params: Params
}

const props = defineProps<Props>()

const { params } = toRefs(props)

const model = defineModel()

const validateNumbers = (event: KeyboardEvent) => {
  const { keyCode, key } = event
  const isValid = (keyCode >= 48 && keyCode <= 57) || key === 'Backspace'
  !isValid && event.preventDefault()
}
</script>

<style lang="scss" scoped>
.number-field {
  max-width: 250px;
}
</style>
