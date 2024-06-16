<script setup lang="ts">
const user = useSupabaseUser()
const { auth } = useSupabaseClient()

const redirectTo = `${useRuntimeConfig().public.baseUrl}/confirm`

watchEffect(() => {
  if (user.value) {
    navigateTo('/tasks')
  }
})
</script>

<template>
  <div class="min-h-full py-12 sm:px-6 lg:px-8">
    <h2 class="my-6 text-center text-3xl font-extrabold u-text-white">
      Sign in to your account
    </h2>

    <AppButton @click="auth.signInWithOAuth({ provider: 'github', options: { redirectTo } })">
      Log in with Google
      <LogInIcon />
    </AppButton>
  </div>
</template>