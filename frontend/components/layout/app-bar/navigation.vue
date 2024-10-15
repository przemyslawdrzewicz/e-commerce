<template>
  <div>
    <v-btn
      v-for="{ title, category, to } in navigationLinks"
      :key="category"
      :to="to"
      :active="false"
    >
      {{ title }}
    </v-btn>
  </div>
</template>

<script setup>
import { navigationLinks } from '@/utils/appbar'
</script>
