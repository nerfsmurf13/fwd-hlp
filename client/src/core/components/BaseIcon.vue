<script setup>
// Simple blue line icons. name: water | flame | shield | check
defineProps({
  name: { type: String, required: true }
})
</script>

<template>
  <svg
    class="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path v-if="name === 'water'" d="M12 3c3.5 4.5 6 7.8 6 11a6 6 0 1 1-12 0c0-3.2 2.5-6.5 6-11Z" />
    <template v-else-if="name === 'flame'">
      <path
        d="M12 3s-5 4.5-5 9.5a5 5 0 0 0 10 0c0-1.5-.5-3-1.5-4.5-.5 1-1.5 1.8-2.5 2-.2-2.5-.5-5-1-7Z"
      />
    </template>
    <template v-else-if="name === 'shield'">
      <path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3Z" />
    </template>
    <template v-else-if="name === 'check'">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5" />
    </template>
  </svg>
</template>

<style scoped>
.icon {
  width: 2.5rem;
  height: 2.5rem;
  color: var(--blue);
}
</style>
