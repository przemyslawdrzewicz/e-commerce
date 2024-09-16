<template>
  <v-btn class="align-self-center" icon @click="next">
    <v-icon>mdi-chevron-right</v-icon>
  </v-btn>
</template>

<script setup>
const props = defineProps({
  products: {
    type: Array,
    default: () => []
  },
  selectedIndex: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['update-selected'])

const next = () => {
  const { selectedIndex, products } = props

  const newIndex = selectedIndex + 1
  const firstIndex = 0
  const newSelected = products[newIndex <= 3 ? newIndex : firstIndex]
  emit('update-selected', newSelected)
}
</script>
