<template>
  <v-btn variant="text" class="mb-4" :to="to">
    <v-icon class="mr-2">mdi-arrow-left</v-icon>
    {{ title }}
  </v-btn>
</template>

<script lang="ts" setup>
interface Props {
  to: string
  title: string
}

const props = defineProps<Props>()
</script>
