<template>
  <div class="order-success">
    <div class="title">Product ordered successfully</div>
    <div class="description">
      Check your email address and login to the application and check the order
      status.
    </div>
    <v-btn class="login-button" color="black" to="/login">Login</v-btn>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/breakpoints';

.order-success {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  gap: 40px;

  @media (max-width: $lg) {
    padding-left: 20px;
    padding-right: 20px;
  }

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
    max-width: 400px;
  }

  .login-button {
    width: 200px;

    @media (max-width: $sm) {
      width: 100%;
    }
  }
}
</style>
