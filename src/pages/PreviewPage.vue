<template>
  <div class="py-4">
    <h3 class="">Персональные данные</h3>
  </div>
  <div class="flex gap-2 mb-10">
    <p class="font-bold">{{ userInfo.name }}, {{ userInfo.age }}</p>
  </div>
  <div>
    <div class="py-4">
      <h3>Дети</h3>
    </div>
    <ul class="py-4 inline-flex flex-col gap-2">
      <li
        v-for="item in childInfo"
        :key="item.id"
        class="font-bold px-6 py-4 bg-gray-300 rounded-md inline"
      >
        {{ item.name }}, {{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import router from "../routes";

const store = useStore();

const userInfo = computed(() => {
  return store.state.user;
});

const childInfo = computed(() => {
  return store.state.userChildren;
});
</script>

<style lang="scss" scoped></style>
