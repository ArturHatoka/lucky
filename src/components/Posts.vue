<template>
  <v-container class="posts__wrapper">
    <h2 class="posts__header">{{title}}</h2>
    <router-link
      v-for="(post, idx) of posts"
      :key="idx"
      :to="`/post/`+post.id"
      class="posts"
    >
      <h3 class="posts__title">{{post.name}}</h3>
      <p class="posts__content" v-html="content(post.content)"/>
    </router-link>
  </v-container>
</template>
<script setup lang="ts">
interface Post {
  id: number
  name: string
  content: string
  post_id: object
}

const props = defineProps<{
  title: string;
  posts: Post[];
}>();

const content = (p_content: string) => {
  return p_content.slice(0, 200) + '...'
}
</script>
<style scoped lang="sass">
</style>
