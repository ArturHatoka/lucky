<template>
  <Posts
    :title="category.name"
    :posts="posts">
  </Posts>
</template>
<script setup lang="ts">
import {onBeforeMount, Ref, ref} from "vue";
import {useRoute} from 'vue-router';
import Posts from "@/components/Posts.vue";

const route = useRoute();
const categoryId = route.params.categoryId;

interface Post {
  id: number
  name: string
  content: string
  post_id: object
}

interface Category {
  date_created: string
  date_updated: string
  status: string
  id: number
  sort: number
  name: string
  img: string
  title: string
  keywords: object
  description: string
}

const posts: Ref<Post[]> = ref([]);
const category: Ref<Category> = ref({} as Category);

onBeforeMount(() => {
  fetch(`https://postapi.fiery.host/items/category/${categoryId}?fields=*.*.name,*.*.id,*.*.content`).then((res) => {
    return res.json()
  }).then(({data}) => {
    category.value = data

    posts.value = data.post.reduce((postsTemp: Object[], post: Post) => {
      postsTemp.push(post.post_id)
      return postsTemp
    }, [])
  }).catch((err) => {
    console.error(err)
  })
})
</script>
