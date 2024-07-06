<script setup lang="ts">
import { RouterView } from 'vue-router'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutBackToTop from './components/LayoutBackToTop.vue'
import LayoutHeader from './components/LayoutHeader.vue'
</script>

<template>
  <LayoutHeader />

  <RouterView />

  <div>
    <div style="height: 800px; color: blue"></div>
  </div>

  <LayoutBackToTop />
  <LayoutFooter />
</template>
