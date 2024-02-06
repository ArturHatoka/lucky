<template>
  <v-app>
    <header>
      <a href="/" class="logo__wrapper">
        <img class="logo" src="./assets/logo.jpg" alt="logo">
      </a>
    </header>
    <v-main>
      <router-view />
    </v-main>
    <footer>
      <a href="/" class="logo__wrapper">
        <img class="logo" src="./assets/logo.jpg" alt="logo">
      </a>
    </footer>
  </v-app>
</template>

<script lang="ts" setup>
  //
</script>

<style scoped lang="sass">
header
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)

.logo
  width: auto
  height: auto
  max-width: 55%

  &__wrapper
    margin: 30px 0 10px
    width: 100%
    height: auto
    display: flex
    align-items: center
    justify-content: center

footer
  .logo__wrapper
    margin: 10px 0
</style>
