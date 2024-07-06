<script setup></script>
<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">McDL</RouterLink>
      </h1>
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
    }
  }
}
</style>
