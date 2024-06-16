<script setup lang="ts">
const user = useSupabaseUser()
const { auth } = useSupabaseClient()
</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 text-white">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="assets/logo.svg" class="h-8" alt="Flash Cubes" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flash Cubes</span>
      </a>
      <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-4">
        <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom" @click="auth.signOut()">
          <img class="w-8 h-8 rounded-full" :src="user?.user_metadata.avatar_url" alt="User photo">
        </button>
      </div>
    </div>
  </nav>
</template>