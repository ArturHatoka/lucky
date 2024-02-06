<template>
  <Post
  :title="'ПОСТ '+postId"
  :date="'5 декабря 2023'"
  :content="'asdasd'"
  />
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import Post from "@/components/Post.vue";

const route = useRoute();
const postId = route.params.postId;

</script>
