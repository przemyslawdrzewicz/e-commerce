<template>
  <v-app-bar height="80" color="transparent" flat class="app-bar pt-1">
    <div class="content">
      <nuxt-link to="/" class="text-decoration-none align-self-center">
        <logo />
      </nuxt-link>
      <div class="actions">
        <layout-app-bar-navigation class="align-self-center mr-10" />
        <layout-app-bar-cart class="align-self-center" />
      </div>
    </div>
  </v-app-bar>
</template>

<script setup></script>

<style scoped lang="scss">
.app-bar {
  border-bottom: 1px solid #0000001b;

  .content {
    margin-left: 65px;
    margin-right: 65px;
    display: flex;
    justify-content: space-between;
    width: 100%;

    .actions {
      display: flex;
    }
  }
}
</style>
