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

<script lang="ts" setup>
interface Props {
  page?: number
  length?: number
}

const { page = 1, length = 0 } = defineProps<Props>()

const emit = defineEmits<{
  previous: []
  next: []
}>()

const previous = () => emit('previous')
const next = () => emit('next')

const isPreviousDisabled = computed(() => !length || page === 1)
const isNextDisabled = computed(() => !length || page === length)
</script>
