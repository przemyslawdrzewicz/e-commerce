<template>
  <v-app-bar height="80" color="#f3f2f4" flat class="app-bar pt-1">
    <div class="content">
      <nuxt-link to="/" class="text-decoration-none align-self-center">
        <logo />
      </nuxt-link>
      <div v-if="display.mdAndUp" class="actions">
        <layout-app-bar-navigation class="align-self-center mr-10" />
        <layout-app-bar-cart class="align-self-center" />
      </div>
      <div v-else class="actions">
        <layout-app-bar-hamburger />
      </div>
    </div>
  </v-app-bar>
</template>

<script setup>
import { useDisplay } from 'vuetify'
const display = ref(useDisplay())
</script>

<style lang="scss" scoped>
@import '@/assets/scss/breakpoints';

.app-bar {
  border-bottom: 1px solid #0000001b;

  .content {
    display: flex;
    justify-content: space-between;
    width: 100%;

    padding-left: 20px;
    padding-right: 20px;

    @media (min-width: $lg) {
      padding-left: 80px;
      padding-right: 80px;
    }

    .actions {
      display: flex;
    }
  }
}
</style>
