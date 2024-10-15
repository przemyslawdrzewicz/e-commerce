<template>
  <v-text-field @update:modelValue="update" />
</template>

<script setup>
// this.test = 'test'

const value = ref('')
const delay = ref(null)

// var x = {
//   showName: () => {
//     console.log(this.test)
//   }
// }

// console.log(x.showName())

const update = newText => {
  clearTimeout(delay.value)
  delay.value = setTimeout(() => {
    console.log('now it is emited')
  }, 1000)
}
</script>
