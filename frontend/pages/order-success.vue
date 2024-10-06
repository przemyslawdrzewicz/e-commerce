<template>
  <div class="order-success">
    <div class="title">Product ordered successfully</div>
    <div class="description">
      Check your email address and login to the application and check the order
      status.
    </div>
    <v-btn width="200" color="black" to="/login">Login</v-btn>
  </div>
</template>

<style lang="scss" scoped>
.order-success {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  gap: 40px;

  .title {
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    width: 300px;
  }

  .description {
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    width: 400px;
  }
}
</style>
