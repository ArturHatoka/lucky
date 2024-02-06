<template>
  <v-container class="post">
    <h1 class="post__title">{{ title }}</h1>
    <span class="post__date">{{date}}</span>
    <div class="post__content">{{content}}</div>
  </v-container>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  date: string;
  content: string;
}>();
</script>

<style lang="sass" scoped>
$black: #181414
.post
  display: flex
  flex-direction: column
  align-items: center
  &__title
    font-family: 'Playfair Display', serif
    color: $black
    font-weight: 400
    font-size: 32px
    text-align: center
    width: 90%
    padding-bottom: 16px

  &__date
    font-family: 'Arial', serif
    font-size: 16px
    color: #746F6F
    margin-bottom: 32px

  &__content
    width: 100%
    font-family: 'Arial', serif
    color: $black
</style>
