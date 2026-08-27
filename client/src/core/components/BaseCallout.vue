<script setup>
// Safety callout — the site's ONLY use of yellow (highlighter swipe).
defineProps({
  label: { type: String, default: 'Did You Know?' }
})
</script>

<template>
  <aside class="callout">
    <p class="label headline"><span class="highlight">{{ label }}</span></p>
    <p class="text"><slot /></p>
  </aside>
</template>

<style scoped>
.callout {
  border: 1px solid var(--line);
  border-left: 4px solid var(--navy);
  border-radius: var(--radius-card);
  background: var(--white);
  padding: 1.5rem 1.75rem;
}

.label {
  font-size: 1.25rem;
}

.text {
  margin-top: 0.5rem;
  color: var(--slate);
  text-wrap: pretty;
}
</style>
