<script setup lang="ts">
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <ClientOnly>
      <!-- TODO - Temporary -->
      <NuxtPage />
    </ClientOnly>
  </NuxtLayout>
</template>
