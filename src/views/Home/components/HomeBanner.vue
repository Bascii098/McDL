<template>
  <div class="banner">
    <el-carousel height="300px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.banner {
  width: 1240px;
  margin: 50px auto;

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
