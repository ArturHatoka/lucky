<template>
  <Post
  :title="post.name"
  :date="post.date_created"
  :content="post.content"
  />
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import Post from "@/components/Post.vue";
import {onBeforeMount, ref, Ref} from "vue";

const route = useRoute();
const postId = route.params.postId;

interface Post {
  date_created: string
  date_updated: string
  id: number
  sort: number
  status: string
  name: string
  content: string
  title: string
  description: string
  keywords: string
}

const post: Ref<Post> = ref({} as Post);

onBeforeMount(() => {
  fetch(`https://postapi.fiery.host/items/post/${postId}`).then((res) => {
    return res.json()
  }).then(({data}) => {
    post.value = data
  }).catch((err) => {
    console.error(err)
  })
})
</script>
