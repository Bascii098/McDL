<script setup></script>
<template>
  <el-backtop :bottom="100">
    <div class="top">
      ↑
    </div>
  </el-backtop>
</template>
<style lang="scss">
.top {
  height: 100%;
  width: 100%;
  background-color: var(--el-bg-color-overlay);
  box-shadow: var(--el-box-shadow-lighter);
  text-align: center;
  line-height: 40px;
  border-radius: 20px;
  color: #ffbc0d;
}
</style>