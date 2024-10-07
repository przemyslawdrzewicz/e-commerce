<template>
  <v-layout class="rounded rounded-md">
    <layout-app-bar />
    <v-main class="default" style="min-height: 300px">
      <div class="container">
        <div class="content">
          <slot />
        </div>
      </div>
    </v-main>
  </v-layout>
</template>
