<script setup>
import { RouterView } from 'vue-router'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutBackToTop from './components/LayoutBackToTop.vue'
import LayoutHeader from './components/LayoutHeader.vue'
</script>

<template>
  <LayoutHeader />

  <RouterView />

  <LayoutBackToTop />
  <LayoutFooter />
</template>
