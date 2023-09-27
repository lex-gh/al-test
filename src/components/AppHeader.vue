<template>
  <header class="border-b-2 border-x-gray-500">
    <div class="container mx-auto py-4 px-2 flex">
      <img src="@/assets/logo.png" alt="alef_logo" width="93" height="20" />
      <nav class="flex justify-center flex-1">
        <ul class="flex gap-4">
          <li>
            <router-link class="text-gray-500" to="/form">Форма</router-link>
          </li>
          <li>
            <router-link class="text-gray-500" to="/">Превью</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
