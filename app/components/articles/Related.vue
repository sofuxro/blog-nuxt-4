<script setup lang="ts">
import Article from '~/components/articles/index.vue'

const featured = {
  date: '2023-10-01',
  title: 'Exploring the Best Social Events in Your City. Exploring the Best Social Events in Your City',
  description: 'Discover the top social events happening this month and how to make the most of them. Discover the top social events happening this month and how to make the most of them. Discover the top social events happening this month and how to make the most of them. Discover the top social events happening this month and how to make the most of them. Discover the top social events happening this month and how to make the most of them.',
  image: 'https://thumbs.dreamstime.com/b/chef-group-young-people-cooking-classes-chef-group-young-people-cooking-classes-151106167.jpg',
  categories: ['Social Events'],
}
</script>

<template>
  <div class="flex flex-wrap -mx-[10px]">
    <Article
      v-for="n of 3"
      :key="n"
      class="w-1/3"
      v-bind="featured"
    />
  </div>
</template>
