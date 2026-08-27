<script setup>
import { useSiteStore } from './site.store.js'

const store = useSiteStore()
</script>

<template>
  <section class="verify section-pale">
    <div class="wrap band">
      <div>
        <h2 class="title">{{ store.verify.heading }}</h2>
        <p class="sub">{{ store.verify.body }}</p>
        <p class="source">{{ store.verify.source }}</p>
      </div>
      <div class="actions">
        <a
          :href="store.verify.officialUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary"
        >
          {{ store.verify.officialCta }} &rarr;
        </a>
        <RouterLink to="/verify" class="text-link">{{ store.verify.cta }}</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.verify {
  padding-block: var(--section-pad);
}

.band {
  display: grid;
  gap: 2rem;
  align-items: center;
}

.title {
  max-width: 20ch;
}

.sub {
  margin-top: 1rem;
}

.source {
  margin-top: 1rem;
  font-size: 0.8125rem;
  color: var(--slate);
}

.actions {
  display: grid;
  gap: 1rem;
  justify-items: start;
}

@media (min-width: 900px) {
  .band {
    grid-template-columns: 1fr auto;
  }

  .actions {
    justify-items: end;
    text-align: right;
  }
}
</style>
