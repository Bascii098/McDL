<script setup>
import { getCategoryAPI } from '@/apis/foodsCategory'
import { onMounted, ref } from 'vue'

const foodsList = ref([])
const getFood = async () => {
  const res = await getCategoryAPI()
  foodsList.value = res.data
}
onMounted(() => getFood())
</script>

<template>
  <ul class="category">
    <li v-for="item in foodsList" :key="item.ID">
      <RouterLink :to="`/menu/${item.ID}`">
        <div class="hold"></div>
        <img class="img" :src="item.imgurl" />
        <div class="message">{{ item.name }}</div>
      </RouterLink>
    </li>
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
      background-color: #ebebeb;
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
