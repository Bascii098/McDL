<template>
  <div>
    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/menu/1' }">菜单</el-breadcrumb-item>
      <el-breadcrumb-item>巨无霸</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="detail">
    <img class="img" src="@/assets/images/burger.png" alt="" />
    <div class="spec">
      <div class="g-name">巨无霸</div>
      <div class="g-desc">
        传承50年的经典之选！两块100%纯牛肉饼，搭配撒有鲜芝麻的松软面包、清新爽口的生菜、洋葱和酸黄瓜，辅以香滑顺口的芝士与美味酱汁，层层食材，口感丰富，打造极致美味体验。
      </div>
      <div class="g-price">
        <span> ￥19.9</span>
      </div>
    </div>
  </div>
  <hr />
  <div>
    <el-button size="large" class="btn"> 加入购物车 </el-button>
  </div>
</template>
<style scoped lang="scss">
.breadcrumb {
  margin-top: 20px;
  margin-left: 20px;
}

.detail {
  display: flex;
  margin-left: 450px;
  margin-top: 50px;
  width: 1000px;
  height: 450px;

  .img {
    width: 400px;
    height: 400px;
    border: 1px solid $BORDERCOLOR;
    /* 添加1像素黑色边框 */
    border-radius: 5px;

    /* 添加圆角边框 */
  }

  .spec {
    //flex: 1;
    display: flex;
    width: 800px;
    height: 400px;
    margin-left: 50px;
    flex-wrap: wrap;

    .g-name {
      font-size: 28px;
      line-height: 38px;
      color: red;
    }

    .g-desc {
      font-size: 15px;
    }

    .g-price {
      font-size: 30px;
      line-height: 28px;
      color: #dc1515;
      font-family: fantasy;
      margin-left: 75%;
    }
  }
}

.btn {
  margin: 20px 20px;
}
</style>
