<script setup>
import TheHeader from '../core/components/TheHeader.vue'
import TheFooter from '../core/components/TheFooter.vue'
</script>

<template>
  <div>
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
