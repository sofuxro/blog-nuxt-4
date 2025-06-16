<script setup lang="ts">
import Waves from '~/components/UIEffects/Waves.vue'

definePageMeta({ layout: 'admin' })
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="relative">
      <Waves />
      <div class="absolute inset-20 bg-white/50 backdrop-blur-xs shadow-lg rounded-xl p-8 max-w-md mx-auto border border-white/30">
        <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
        <form>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
              minlength="10"
            >
          </div>
          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <!--
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
               title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                https://www.w3schools.com/howto/howto_js_password_validation.asp
             -->
            <input
              id="password"
              type="password"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
              minlength="8"
            >
          </div>
          <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 cursor-pointer">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>
