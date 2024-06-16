<script setup lang="ts">
  const user = useSupabaseUser()
  const { auth } = useSupabaseClient()
  const redirectTo = `${useRuntimeConfig().public.baseUrl}/confirm`

  const signIn = () => auth.signInWithOAuth({ provider: 'google', options: { redirectTo } })
</script>

<template>
  <div id="app">
    <NuxtLayout v-if="user">
      <NuxtPage />
    </NuxtLayout>
    <div v-else class="min-h-full flex flex-col items-center py-16 px-6 text-center">
      <div class="dark:bg-gray-900 w-40 h-40 flex flex-col items-center justify-center rounded-md text-center text-white">
        <img src="assets/logo.svg" class="h-24" alt="" />
        <span class="mt-3 font-semibold">Flash Cubes</span>
      </div>
      <h2 class="mt-16 text-2xl font-semibold">
        Please sign in to your account
      </h2>

      <AppButton class="mt-6" @click="signIn()">
        Sign in with Google
        <LogInIcon />
      </AppButton>
    </div>
  </div>
</template>
