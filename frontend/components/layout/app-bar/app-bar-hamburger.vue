<template>
  <v-menu offset="10">
    <template v-slot:activator="{ props }">
      <v-btn variant="text" icon :active="false" v-bind="props">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </template>
    <v-list width="220" class="py-6 px-2">
      <v-list-item>Living room</v-list-item>
      <v-list-item>Office</v-list-item>
      <v-list-item>Kitchen</v-list-item>
      <v-list-item class="mt-5">
        <div class="d-flex">
          <icons-cart />
          <div class="mt-1 ml-3">Shopping cart</div>
        </div>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup></script>
