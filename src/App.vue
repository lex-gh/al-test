<template>
  <div class="h-full flex flex-col">
    <app-header />
    <main class="flex-1 container mx-auto px-4"><router-view /></main>
    <app-footer />
  </div>
</template>
<script setup>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
</script>
