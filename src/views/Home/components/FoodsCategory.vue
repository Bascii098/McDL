<script setup></script>

<template>
  <ul class="category">
    <li>
      <RouterLink to="/menu/1">
        <div class="hold"></div>
        <img class="img" src="@/assets/images/burger.png" />
        <div class="message">汉堡</div>
      </RouterLink>
    </li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</template>
<style lang="scss" scoped>
.category {
  width: 1240px;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: left;

  li {
    margin-top: 20px;
    margin-right: 20px;
    height: 700px;
    width: 400px;
    border: 1px solid #d9d9d9;
    background-color: fff;

    &:hover {
      transform: translateY(-10px);
      border: 1px solid #333;

      .message {
        color: $MCDLColor;
      }
    }

    &:nth-child(3n) {
      margin-right: 0px;
    }

    .hold {
      height: 180px;
    }

    .img {
      height: 400px;
    }

    .message {
      width: 400px;
      height: 120px;
      text-align: center;
      font-size: 60px;
      font-family: 'Courier New', Courier, monospace;
    }
  }
}
</style>
