<template>
  <Categories
    :categories="categories"
  />
  <Posts
    :title="'САМОЕ ПОПУЛЯРНОЕ'"
    :posts="posts"
  />
</template>

<script lang="ts" setup>
import {onBeforeMount, Ref, ref} from "vue";
import Categories from "@/components/Categories.vue";
import Posts from "@/components/Posts.vue";

interface Post {
  id: number
  name: string
  content: string
  post_id: object
}

interface Category {
  date_created: string
  date_updated: string
  description: string
  id: number
  content: string
  keywords: object
  name: string
  sort: number
  status: string
  title: string
  img: string
}

const posts: Ref<Post[]> = ref([]);
const categories: Ref<Category[]> = ref([]);

onBeforeMount(() => {
  fetch('https://postapi.fiery.host/items/category').then((res) => {
    return res.json()
  }).then(({data}) => {
    categories.value = data
  }).catch((err) => {
    console.error(err)
  })

  fetch('https://postapi.fiery.host/items/main?fields=*.*.name,*.*.id,*.*.content').then((res) => {
    return res.json()
  }).then(({data}) => {
    posts.value = data[0].posts_popular.reduce((postsTemp: Object[], post: Post) => {
      postsTemp.push(post.post_id)
      return postsTemp
    }, [])
  }).catch((err) => {
    console.error(err)
  })
})
</script>
