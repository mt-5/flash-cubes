<script setup lang="ts">
const sb = useSupabaseClient()

  const stacks = await sb.from('stacks').select()
</script>

<template>
  <div class="py-8 px-5">
    <h3 class="text-xl font-semibold">Cube stacks</h3>

    <p v-for="stack in stacks.data" :key="stack.id">{{ stack.name }}</p>
  </div>
</template>