<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  heading: { type: String, required: true },
  subheading: { type: String, default: '' }
})
</script>

<template>
  <header class="page-header">
    <div class="wrap inner">
      <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
      <h1 class="title">{{ heading }}</h1>
      <p v-if="subheading" class="sub lede">{{ subheading }}</p>
    </div>
  </header>
</template>

<style scoped>
.page-header {
  background: var(--gray);
  border-bottom: 1px solid var(--line);
}

.inner {
  padding-block: clamp(3.5rem, 7vw, 6rem);
}

.title {
  margin-top: 0.5rem;
  max-width: 20ch;
  text-wrap: balance;
}

.lede {
  margin-top: 1.25rem;
}
</style>
