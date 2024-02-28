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
import {computed, onBeforeMount, ref, Ref} from "vue";
import {useHead} from "@vueuse/head";

const route = useRoute();
const postId = route.params.postId;

interface IPost {
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

const post: Ref<IPost> = ref({} as IPost);

onBeforeMount(() => {
  fetch(`https://postapi.fiery.host/items/post/${postId}`).then((res) => {
    return res.json()
  }).then(({data}) => {
    post.value = data

    useHead({
      title: computed(()=> data.title + ` | Lucky Beauty`),
      meta: [
        {
          name: `description`,
          content: computed(() => data.description),
        },
        {
          name: `keywords`,
          content: computed(() => data.keywords.join(', ')),
        },
      ],
    })
  }).catch((err) => {
    console.error(err)
  })
})
</script>
