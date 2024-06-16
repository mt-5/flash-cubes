const user = useSupabaseUser()

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== '/' && !user) {
    return navigateTo('/')
  }
})