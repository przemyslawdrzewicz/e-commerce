<template>
  <v-btn variant="text" icon @click="deleteCartItem">
    <icons-trash />
  </v-btn>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})

const deleteCartItem = () => console.log(props.item, 'item')
</script>
