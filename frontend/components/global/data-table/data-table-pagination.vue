<template>
  <div class="d-flex">
    <v-btn variant="text" icon :disabled="isPreviousDisabled" @click="previous">
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-btn variant="text" icon :disabled="isNextDisabled" @click="next">
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>

<script setup>
const props = defineProps({
  page: {
    type: Number,
    default: 1
  },
  length: {
    type: Number,
    default: 0
  }
})

const { page, length } = toRefs(props)

const emit = defineEmits(['previous', 'next'])

const previous = () => emit('previous')
const next = () => emit('next')

const isPreviousDisabled = computed(() => !length.value || page.value === 1)
const isNextDisabled = computed(
  () => !length.value || page.value === length.value
)
</script>
