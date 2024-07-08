<script setup>
import { getCategoryAPI } from '@/apis/foodsCategory'
import { onMounted, ref } from 'vue'
const foodsList = ref([])
const getBanner = async () => {
  const res = await getCategoryAPI()
  foodsList.value = res.data
}
onMounted(() => getBanner())
</script>
<template>
  <div>
    <ul>
      <li class="home" v-for="item in foodsList" :key="item.ID">
        <RouterLink class="router" active-class="active" :to="`/menu/${item.ID}`">
          <img class="img" :src="item.imgurl" />
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

  .active {
    .msg {
      color: $MCDLColor;
    }
  }

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
