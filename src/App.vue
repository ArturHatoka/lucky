<template>
  <v-app>
    <header>
      <a href="/" class="logo__wrapper">
        <img alt="logo" class="logo" src="./assets/logo.webp">
      </a>
    </header>

    <v-main>
      <router-view />
    </v-main>

    <footer>
      <a href="/" class="logo__wrapper">
        <img alt="logo" class="logo" src="./assets/logo.webp">
      </a>
    </footer>
  </v-app>
</template>
