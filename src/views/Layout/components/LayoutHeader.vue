<script setup></script>
<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">McDL</RouterLink>
      </h1>
      <h1 class="menu">
        <RouterLink to="/menu"> menu </RouterLink>
        <div @click="$router.push('/menu')" class="character">菜单</div>
      </h1>
      <h1 class="cart">
        <RouterLink to="/cart">cart</RouterLink>
        <div @click="$router.push('/cart')" class="character">购物车</div>
      </h1>
      <h1 class="profile">
        <RouterLink to="/profile">
          <div>
            <el-avatar
              :size="100"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
          </div>
        </RouterLink>
      </h1>
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  background: #fff;
  border-bottom: 1px solid #d9d9d9;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 120px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center / contain;
    }
  }

  .menu {
    width: 300px;

    &:hover {
      color: red;
      border-left: 1px solid #d9d9d9;
      border-right: 1px solid #d9d9d9;
    }

    a {
      display: flex;
      height: 60px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/menu.png') no-repeat center / contain;
    }

    .character {
      width: 300px;
      height: 40px;
      font-size: 20px;
      line-height: 40px;
      font-weight: lighter;
      text-align: center;
    }
  }

  .cart {
    width: 300px;

    &:hover {
      color: red;
      border-left: 1px solid #d9d9d9;
      border-right: 1px solid #d9d9d9;
    }

    a {
      display: flex;
      height: 60px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/cart.png') no-repeat center / contain;
    }

    .character {
      width: 300px;
      height: 40px;
      font-size: 20px;
      line-height: 40px;
      font-weight: lighter;
      text-align: center;
    }
  }
}
</style>
