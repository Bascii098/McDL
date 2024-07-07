<script setup>
import MenuNav from './components/MenuNav.vue'
const list = [
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081011205699.png',
    urlString: '1',
    name: '巨无霸',
    price: 19.9
  },
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091547349086.png',
    urlString: '2',
    name: '汉堡包'
  },
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/05/202005270949182813.png',
    urlString: '3',
    name: '麦辣鸡腿汉堡'
  },
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091541242793.png',
    urlString: '4',
    name: '原味板烧鸡腿堡'
  },
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091555536682.png',
    urlString: '5',
    name: '双层安格斯MAX厚牛培根堡'
  },
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091555536682.png',
    urlString: '6',
    name: '双层安格斯MAX厚牛培根堡'
  },
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091555536682.png',
    urlString: '7',
    name: '双层安格斯MAX厚牛培根堡'
  },
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091555536682.png',
    urlString: '8',
    name: '双层安格斯MAX厚牛培根堡'
  },
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091555536682.png',
    urlString: '9',
    name: '双层安格斯MAX厚牛培根堡'
  },
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091555536682.png',
    urlString: '10',
    name: '双层安格斯MAX厚牛培根堡'
  },
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091555536682.png',
    urlString: '11',
    name: '双层安格斯MAX厚牛培根堡'
  },
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091555536682.png',
    urlString: '12',
    name: '双层安格斯MAX厚牛培根堡'
  },
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091555536682.png',
    urlString: '13',
    name: '双层安格斯MAX厚牛培根堡'
  },
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091555536682.png',
    urlString: '14',
    name: '双层安格斯MAX厚牛培根堡'
  },
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208091555536682.png',
    urlString: '15',
    name: '麦旋风™奥利奥草莓口味'
  }
]
</script>
<template>
  <div class="menu">
    <MenuNav class="nav" />
    <ul class="category">
      <li v-for="item in list" :key="item.imgUrl">
        <RouterLink :to="`/foods/${item.urlString}`">
          <img class="img" :src="item.imgUrl" />
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
    height: 700px;
  }
}
</style>
