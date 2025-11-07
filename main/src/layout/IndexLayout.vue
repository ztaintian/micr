<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/app1/home">app1-home</RouterLink>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
div {
  height: 100%;
}
</style>
