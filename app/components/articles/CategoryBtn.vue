<script setup lang="ts">
const { category } = defineProps<{
  category: string
}>()
</script>

<template>
  <NuxtLink
    to="/category/1"
    class="min-h-[50px] inline-block bg-blue-50 hover:bg-blue-100 text-neutral-600 text-base font-semibold px-2.5 py-3 rounded-lg cursor-pointer transition-colors duration-300"
  >{{ category }}</NuxtLink>
</template>
