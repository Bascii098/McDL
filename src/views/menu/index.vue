<script setup>
import MenuNav from './components/MenuNav.vue'
</script>
<template>
  <div class="menu">
    <MenuNav class="nav" />
    <ul class="category">
      <li>
        <RouterLink to="/foods/1">
          <img class="img" src="@/assets/images/burger.png" />
          <div class="message">汉堡</div>
          <div class="price">19.9</div>
        </RouterLink>
      </li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.menu {
  display: flex;

  .category {
    display: flex;
    width: 1500px;
    flex-wrap: wrap;
    justify-content: left;

    li {
      margin-top: 20px;
      margin-right: 20px;
      height: 400px;
      width: 300px;
      border: 1px solid #d9d9d9;
      background-color: fff;

      &:hover {
        transform: translateY(-10px);
        border: 1px solid #333;

        .message {
          color: $MCDLColor;
        }
      }

      &:nth-child(4n) {
        margin-right: 0px;
      }

      .img {
        width: 300px;
        height: 300px;
      }

      .message {
        width: 300px;
        height: 50px;
        text-align: center;
        font-size: 40px;
        font-family: 'Courier New', Courier, monospace;
      }

      .price {
        width: 300px;
        height: 50px;
        text-align: center;
        font-size: 40px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
          Geneva, Verdana, sans-serif;
        color: red;
      }
    }
  }

  .nav {
    width: 450px;
    height: 700px;
  }
}
</style>
