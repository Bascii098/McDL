<script setup>
const list = [
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081011205699.png',
    urlString: '1',
    name: '汉堡'
  },
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091547349086.png',
    urlString: '2',
    name: '小食'
  },
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/05/202005270949182813.png',
    urlString: '3',
    name: '甜品'
  },
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091541242793.png',
    urlString: '4',
    name: '饮品'
  },
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091555536682.png',
    urlString: '5',
    name: '套餐'
  }
]
</script>

<template>
  <ul class="category">
    <li v-for="item in list" :key="item.urlString">
      <RouterLink :to="`/menu/${item.urlString}`">
        <div class="hold"></div>
        <img class="img" :src="item.imgUrl" />
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
