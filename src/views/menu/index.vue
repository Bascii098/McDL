<script setup>
import MenuNav from './components/MenuNav.vue'
import { getHamburgersAPI } from '@/apis/hamburgers'
import { getCategoryAPI } from '@/apis/foodsCategory'
import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const foodsList = ref([])
const getFoodList = (id) => {
  if (id === '1') {
    return getHamburgersAPI()
  } else if (id === '2') {
    return getCategoryAPI()
  } else if (id === '3') {
    return getCategoryAPI()
  } else if (id === '4') {
    return getCategoryAPI()
  } else if (id === '5') {
    return getCategoryAPI()
  } else if (id === '6') {
    return getCategoryAPI()
  } else {
    alert('页面不存在')
    router.replace('/')
  }
}
const getFood = async (id = route.params.id) => {
  const res = await getFoodList(id)
  foodsList.value = res.data
}
onMounted(() => getFood())
onBeforeRouteUpdate((to) => getFood(to.params.id))
</script>
<template>
  <div class="menu">
    <MenuNav class="nav" />
    <ul class="category">
      <li v-for="item in foodsList" :key="item.id">
        <RouterLink :to="`/foods/${item.id}`">
          <img class="img" :src="item.imgurl" />
          <div class="message">{{ item.name }}</div>
          <div class="price">￥{{ item.price }}</div>
        </RouterLink>
      </li>
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
    align-content: baseline;

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
        font-size: 20px;
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
  }
}
</style>
