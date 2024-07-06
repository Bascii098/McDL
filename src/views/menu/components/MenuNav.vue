<script setup>
const categoryList = [
  { name: '汉堡', id: 1 },
  { name: '饮料', id: 2 },
  { name: '小吃', id: 3 },
  { name: '套餐', id: 4 }
]
</script>
<template>
  <div>
    <ul>
      <li class="home" v-for="item in categoryList" :key="item.id">
        <RouterLink class="router" active-class="active" :to="`/menu/${item.id}`">
          <img class="img" src="@/assets/images/burgericon.png" />
          <div class="msg">{{ item.name }}</div>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
.home {
  width: 400px;
  height: 200px;

  .router {
    display: flex;
    width: 400px;
    height: 200px;
    background-color: #fff;
    border-bottom: 1px solid $BORDERCOLOR;

    .img {
      width: 100px;
      height: 100px;
      margin-top: 50px;
      margin-left: 20px;
    }

    .msg {
      width: 300px;
      height: 50px;
      text-align: center;
      font-size: 40px;
      margin-top: 75px;
      font-family: 'Courier New', Courier, monospace;
    }

    &:hover {
      border-bottom: 2px solid red;
      border-top: 2px solid red;

      .msg {
        color: $MCDLColor;
      }
    }
  }
}
</style>
