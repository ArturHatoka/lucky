<template>
  <Posts
    :title="'КАТЕГОРИЯ '+categoryId"
    :posts="posts">
  </Posts>
</template>
<script setup lang="ts">
import {onMounted, Ref, ref} from "vue";
import { useRoute } from 'vue-router';
const route = useRoute();
const categoryId = route.params.categoryId;
interface Posts {
  name: string;
  link: string;
  content: string;
}
const posts: Ref<Posts[]> = ref([]);

onMounted(()=> {
  posts.value.push({
    name: 'Топ средств для лечения акне',
    link: '/post/1',
    content: 'Акне — проблема далеко не только подростковая. Прыщи на лице (звучит грубо, но мы хотим сделать материал, доступный каждому) часто не проходят после полового созревания, а в той или иной...',
  })
  posts.value.push({
    name: 'Как выбрать тени для век',
    link: '/post/2',
    content: 'Тени для век — тот самый этап макияжа, на котором всё может пойти не по плану. Привычная ситуация: вы выбрали модный оттенок, и в магазине это казалось отличным решением. Затем...',
  })
  posts.value.push({
    name: 'Топ средств для лечения акне',
    link: '/post/3',
    content: 'Акне — проблема далеко не только подростковая. Прыщи на лице (звучит грубо, но мы хотим сделать материал, доступный каждому) часто не проходят после полового созревания, а в той или иной...',
  })
  posts.value.push({
    name: 'Как выбрать тени для век',
    link: '/post/4',
    content: 'Тени для век — тот самый этап макияжа, на котором всё может пойти не по плану. Привычная ситуация: вы выбрали модный оттенок, и в магазине это казалось отличным решением. Затем...',
  })
})
</script>
