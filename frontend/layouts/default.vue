<template>
  <v-layout class="rounded rounded-md">
    <layout-app-bar />
    <v-main class="default" style="min-height: 300px">
      <slot />
    </v-main>
  </v-layout>
</template>
