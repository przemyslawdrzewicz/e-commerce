<template>
  <v-layout class="rounded rounded-md">
    <layout-app-bar-wrapper />
    <!-- 
    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-main class="default" style="min-height: 300px">
      <slot />
    </v-main>
  </v-layout>
</template>
