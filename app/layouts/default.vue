<script setup lang="ts">
import Footer from '~/components/layout/Footer.vue'
</script>

<template>
  <div class="overflow-hidden">
    <div class="w-[1400px] mx-auto p-4">
      <slot />
    </div>
    <Footer class="mt-[200px]" />
  </div>
</template>
