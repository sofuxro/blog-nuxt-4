<script setup lang="ts">
import LavaLamp from '../UIEffects/LavaLamp.vue'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="relative">
    <LavaLamp />

    <div class="content">
      <p>© {{ currentYear }} My Blog. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  z-index: 1;
  display:grid;
  position: relative;
  background:var(--color-cyan-600);
  grid-area: footer;
  min-height:12rem;

  .content {
    position: relative;
    z-index: 1;
  }
}
</style>
