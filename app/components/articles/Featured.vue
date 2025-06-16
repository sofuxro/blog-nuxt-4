<script setup lang="ts">
import CategoryBtn from '~/components/articles/CategoryBtn.vue'

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
  <div>
    <div class="h-[413px] flex flex-col md:flex-row group">
      <div class="w-full md:w-1/2 rounded-l-3xl overflow-hidden">
        <img
          :src="image"
          class="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
        >
      </div>

      <div class="w-full md:w-1/2 relative shadow-xl pt-7 pl-10 pr-6 pb-6 rounded-r-3xl">
        <p class="text-sm text-gray-500 pb-6">{{ formatDate(date) }}</p>

        <h3 class="text-3xl/11 font-medium mb-6 line-clamp-2">{{ title }}</h3>

        <p class="text-gray-600 mb-6 line-clamp-4">{{ description }}</p>

        <div class="absolute left-10 right-6 bottom-6">
          <div class="divider" />

          <div class="flex justify-between items-center">
            <div>
              <CategoryBtn
                v-for="category in categories"
                :key="category"
                class="mt-6 mr-2"
                :category="category"
              />
            </div>
            <NuxtLink to="/post/1" class="btn-text mt-6">Read <fa icon="arrow-right" class="fa-xs" /></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
