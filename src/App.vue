<template>
  <v-app>
    <header>
      <a href="/" class="logo__wrapper">
        <img fetchpriority="high" alt="logo" class="logo" src="./assets/logo.webp" width="494" height="244">
      </a>
    </header>

    <v-main>
      <router-view />
    </v-main>

    <footer v-if="switcher">
      <a href="/" class="logo__wrapper">
        <img fetchpriority="high" alt="logo" class="logo" src="./assets/logo.webp" width="494" height="244">
      </a>
    </footer>
  </v-app>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";

let switcher = ref(false)

onMounted(() => {
  setTimeout(() => {
    switcher.value = true
  }, 400)
})
</script>
<style src="src/styles/mains.scss"/>
