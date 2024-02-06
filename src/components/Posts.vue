<template>
  <v-container class="posts__wrapper">
    <h2 class="posts__header">{{title}}</h2>
    <router-link
      v-for="(post, idx) of posts"
      :key="idx"
      :to="post.link"
      class="posts"
    >
      <h3 class="posts__title">{{post.name}}</h3>
      <p class="posts__content">{{post.content}}</p>
    </router-link>
  </v-container>
</template>
<script setup lang="ts">
interface Post {
  name: string;
  content: string;
  link: string;
}
const props = defineProps<{
  title: string;
  posts: Post[];
}>();
</script>
<style scoped lang="sass">
$black: #181414
.posts
  display: flex
  flex-direction: column
  text-decoration: none
  padding: 24px 16px
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)
  margin-bottom: 20px
  border-radius: 12px
  border-left: 16px solid #330101

  &__title
    font-family: 'Times New Roman', serif
    font-weight: bold
    font-size: 20px
    color: $black
    margin-bottom: 10px

  &__content
    font-family: 'Arial', serif
    font-size: 16px
    color: $black

  &__header
    font-family: 'Playfair Display', serif
    color: $black
    font-weight: 400
    font-size: 32px
    text-align: center
    width: 90%
    padding-bottom: 24px


@media screen and (min-width: 768px)
  .posts
   border-left: 30px solid #330101
</style>
