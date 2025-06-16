<script setup lang="ts">
import { formatDate } from '~~/shared/utils/date'

const { date, title, description, image, categories } = defineProps<{
  date: string
  title: string
  description: string
  image: string
  categories: string[]
}>()
</script>

<template>
  <div class="shrink-0 px-[10px] group pb-6 mb-9">
    <div class="relative rounded-xl overflow-hidden">
      <img :src="image" class="group-hover:scale-103 transition-transform duration-300">
      <button class="absolute top-2 right-2 text-[10px] text-white font-bold bg-black/25 hover:bg-slate-900/50 backdrop-blur-xs px-3 py-2 rounded-lg tracking-widest uppercase cursor-pointer transition-colors duration-300">{{ categories[0] }}</button>
    </div>

    <p class="py-3 text-xs text-gray-500">{{ formatDate(date) }}</p>

    <h3 class="pb-4 font-bold leading-7 line-clamp-2">{{ title }}</h3>

    <p class="text-gray-500 line-clamp-4">{{ description }}</p>
  </div>
</template>
