<template>
  <v-text-field
    v-model="model"
    variant="outlined"
    :label="params.placeholder"
    width="200"
    type="number"
    @keydown="validateNumbers"
  />
</template>

<script setup>
const props = defineProps({
  params: {
    type: Object,
    default: null
  }
})

const { params } = toRefs(props)

const model = defineModel()

const validateNumbers = event => {
  const { keyCode, key } = event
  const isValid = (keyCode >= 48 && keyCode <= 57) || key === 'Backspace'
  !isValid && event.preventDefault()
}
</script>
