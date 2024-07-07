<script setup>
const list = [
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2022/06/27/202206271514102834/202206271514102834_1120_340.jpg?&rand=0827',
    urlString: '1'
  },
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2020/06/18/202006181627374124/202006181627374124_1120_340.jpg?&rand=0827',
    urlString: '2'
  },
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2020/06/18/202006181626316868/202006181626316868_1120_340.jpg?&rand=0827',
    urlString: '3'
  },
  {
    imgUrl:
      'https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2020/06/18/202006181627596520/202006181627596520_1120_340.jpg?&rand=0827',
    urlString: '4'
  }
]
</script>
<template>
  <div class="banner">
    <el-carousel height="340px">
      <el-carousel-item v-for="item in list" :key="item">
        <img
          :src="item.imgUrl"
          class="images"
          @click="$router.push(`/menu/${item.urlString}`)"
          alt=""
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.banner {
  width: 1240px;
  margin: 50px auto;

  .images {
    width: 1240px;
    object-fit: cover;
  }

  h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
  }

  &:nth-child(2n) {
    background-color: #99a9bf;
  }

  &:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>
