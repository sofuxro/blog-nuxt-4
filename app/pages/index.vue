<script setup lang="ts">
import FeaturedArticle from '~/components/articles/Featured.vue'
import ArticleList from '~/components/articles/List.vue'

const featured = {
  date: '2023-10-01',
  title: 'Exploring the Best Social Events in Your City. Exploring the Best Social Events in Your City',
  description: 'Discover the top social events happening this month and how to make the most of them. Discover the top social events happening this month and how to make the most of them. Discover the top social events happening this month and how to make the most of them. Discover the top social events happening this month and how to make the most of them. Discover the top social events happening this month and how to make the most of them.',
  image: 'https://thumbs.dreamstime.com/b/chef-group-young-people-cooking-classes-chef-group-young-people-cooking-classes-151106167.jpg',
  categories: ['Social Events'],
}
</script>

<template>
  <div>
    <div class="w-[50%] pb-[84px]">
      <h1>Ideas for how to Socialize</h1>
      <h2>
        Welcome to our Hub, where we share tips, trends and
        inspiration for unforgettable experiences.
      </h2>
    </div>

    <FeaturedArticle v-bind="featured" />

    <div class="divider my-[84px]" />

    <p class="font-bold text-2xl pb-[50px]">Latest Articles</p>
    <ArticleList />
  </div>
</template>
