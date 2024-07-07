<script setup>
const tableData = [
  {
    foods: '汉堡王可乐鸡翅11111111111111111111111111',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    foods: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    foods: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    foods: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>
<template>
  <div class="order">
    <span class="msg">订单列表</span>
    <el-table :data="tableData" border style="width: 100%" height="800">
      <el-table-column prop="foods" label="套餐" show-overflow-tooltip />
      <el-table-column prop="name" label="状态" width="180" />
      <el-table-column prop="address" label="就餐方式" width="180" />
      <el-table-column prop="address" label="价格" width="180" />
    </el-table>
  </div>
</template>
<style scoped>
.order {
  margin-left: 450px;
  width: 1240px;
  height: 1000px;

  .msg {
    margin: 20px 20px;
    display: flex;
    justify-content: center;
    font-size: large;
  }
}
</style>
