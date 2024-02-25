<template>
  <v-app>
    <header>
      <a href="/" class="logo__wrapper">
        <img alt="logo" class="logo" src="./assets/logo.webp" width="494" height="244">
      </a>
    </header>

    <v-main>
      <router-view />
    </v-main>

    <footer>
      <a href="/" class="logo__wrapper">
        <img alt="logo" class="logo" src="./assets/logo.webp" width="494" height="244">
      </a>
    </footer>
  </v-app>
</template>
