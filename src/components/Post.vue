<template>
  <v-container class="post">
    <h1 class="post__title">{{ title }}</h1>
    <span class="post__date">{{ getDate }}</span>
    <div class="post__content" v-html="content"/>
    <ul style="display:none;">
      <li></li>
    </ul>
    <ol style="display:none;">
      <li></li>
    </ol>
  </v-container>
</template>
<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  title: string;
  date: string;
  content: string;
}>();

const getDate = computed(()=>{
  const date = new Date(props.date);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  return new Intl.DateTimeFormat('ru-RU', options).format(date)
})
</script>
