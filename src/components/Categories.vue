<template>
  <v-container class="category__wrapper">
    <router-link
      v-for="(cat, idx) of categories"
      :key="idx"
      :to="cat.link"
      :style="`background-image: url('${cat.img}');`"
      class="category"
    >
      <h3 class="category__title">{{cat.name}}</h3>
      <v-icon icon="mdi-arrow-right"/>
    </router-link>
  </v-container>
</template>
<script setup lang="ts">
import {onMounted, Ref, ref} from "vue";
interface Category {
  name: string;
  link: string;
  img: string;
}
const categories: Ref<Category[]> = ref([]);

onMounted(()=>{
  categories.value.push({
    name: 'Топы',
    link: '/category/1',
    img: '/src/assets/cats back/back4.jpg',
  })
  categories.value.push({
    name: 'Тренды',
    link: '/category/2',
    img: '/src/assets/cats back/back5.jpg',
  })
  categories.value.push({
    name: 'Советы',
    link: '/category/3',
    img: '/src/assets/cats back/back6.jpg',
  })
  categories.value.push({
    name: 'Топы',
    link: '/category/4',
    img: '/src/assets/cats back/back4.jpg',
  })
  categories.value.push({
    name: 'Тренды',
    link: '/category/5',
    img: '/src/assets/cats back/back5.jpg',
  })
  categories.value.push({
    name: 'Советы',
    link: '/category/6',
    img: '/src/assets/cats back/back6.jpg',
  })
})
</script>
<style scoped lang="sass">
.category
  display: flex
  justify-content: space-between
  align-items: center
  color: white
  text-decoration: none
  cursor: pointer
  padding: 18px 24px
  border-radius: 12px
  background-size: cover
  margin: 4px 0

  &__title
    font-style: italic
    font-size: 24px
    font-weight: 200
    font-family: 'Times New Roman', serif

  &__wrapper
    display: flex
    flex-direction: column
    padding: 28px 24px

@media screen and (min-width: 768px)
  .v-icon
    display: none
  .category
    width: 33%
    justify-content: center
    padding: 6.5vw
    &__wrapper
      flex-direction: row
      flex-wrap: wrap
      justify-content: space-between


@media screen and (min-width: 1280px)

@media screen and (min-width: 1920px)
</style>
