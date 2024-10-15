<template>
  <v-menu offset="10">
    <template v-slot:activator="{ props }">
      <v-btn variant="text" icon :active="false" v-bind="props">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </template>
    <v-list width="220" class="py-6 px-2">
      <v-list-item
        v-for="{ title, to, category } in navigationLinks"
        :key="category"
        :to="to"
        :active="false"
      >
        {{ title }}
      </v-list-item>
      <v-list-item class="mt-5" to="/cart">
        <div class="d-flex">
          <icons-cart />
          <div class="mt-1 ml-3">Shopping cart</div>
        </div>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { navigationLinks } from '@/utils/appbar'
</script>
