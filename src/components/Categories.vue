<template>
  <v-container class="category__wrapper">
    <router-link
      v-for="(cat, idx) of props.categories"
      :key="idx"
      :style="`background-image: url('https://postapi.fiery.host/assets/${cat.img}');`"
      :to="`/category/`+cat.id"
      class="category"
    >
      <h3 class="category__title">{{cat.name}}</h3>
      <svg class="category__arrow" fill="none" height="14" viewBox="0 0 8 14" width="8"
           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.292952 0.636048C0.105481 0.823576 0.000165462 1.07788 0.000165462 1.34305C0.000165462 1.60821 0.105481 1.86252 0.292952 2.05005L5.24295 7.00005L0.292952 11.95C0.110794 12.1387 0.00999975 12.3913 0.0122781 12.6535C0.0145564 12.9156 0.119725 13.1665 0.305133 13.3519C0.490541 13.5373 0.741354 13.6424 1.00355 13.6447C1.26575 13.647 1.51835 13.5462 1.70695 13.364L7.36395 7.70705C7.55142 7.51952 7.65674 7.26521 7.65674 7.00005C7.65674 6.73488 7.55142 6.48058 7.36395 6.29305L1.70695 0.636048C1.51942 0.448577 1.26512 0.343262 0.999952 0.343262C0.734787 0.343262 0.48048 0.448577 0.292952 0.636048Z"
            fill="white"/>
      </svg>
    </router-link>
  </v-container>
</template>
<script setup lang="ts">
const props = defineProps<{
  categories: Category[];
}>();

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
</script>
