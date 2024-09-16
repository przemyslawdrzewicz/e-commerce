<template>
  <v-btn class="align-self-center" icon @click="previous">
    <v-icon>mdi-chevron-left</v-icon>
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

const previous = () => {
  const { selectedIndex, products } = props

  const newIndex = selectedIndex - 1
  const lastIndex = 3
  const newSelected = products[newIndex >= 0 ? newIndex : lastIndex]

  emit('update-selected', newSelected)
}
</script>
