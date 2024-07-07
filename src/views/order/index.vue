<script setup>
const tableData = [
  {
    foods: '汉堡王可乐鸡翅11111111111111111111111111',
    status: '制作中',
    methods: '外带',
    price: '￥19.9'
  },
  {
    foods: '2016-05-02',
    status: '制作中',
    methods: '堂食',
    price: '￥9.9'
  },
  {
    foods: '2016-05-04',
    status: '请取餐',
    methods: '外带',
    price: '￥9.9'
  },
  {
    foods: '2016-05-01',
    status: '请取餐',
    methods: '堂食',
    price: '￥9.9'
  }
]
</script>
<template>
  <div class="order">
    <span class="msg">订单列表</span>
    <el-table :data="tableData" border style="width: 100%" height="800">
      <el-table-column label="套餐" show-overflow-tooltip>
        <template #default="scope">
          <div class="table">
            <span class="status">{{ scope.row.foods }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="180">
        <template #default="scope">
          <div class="table">
            <span class="status">{{ scope.row.status }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="就餐方式" width="180">
        <template #default="scope">
          <div class="table">
            <span class="status">{{ scope.row.methods }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="价格" width="180">
        <template #default="scope">
          <div class="table">
            <span class="price">{{ scope.row.price }}</span>
          </div>
        </template>
      </el-table-column>
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

  .table {
    display: flex;
    align-items: center;
    justify-content: center;

    .price {
      font-size: 28px;
      color: red;
      font-family: fantasy;
    }

    .status {
      font-family: serif;
      font-size: 18px;
    }
  }
}
</style>
