<script setup>
import { useSiteStore } from '../features/site/site.store.js'
import BasePageHeader from '../core/components/BasePageHeader.vue'

const store = useSiteStore()
const page = store.verify.page
</script>

<template>
  <div>
    <BasePageHeader
      :eyebrow="page.eyebrow"
      :heading="page.heading"
      :subheading="page.subheading"
    />

    <!-- three steps -->
    <section class="section">
      <div class="wrap">
        <ol class="steps">
          <li v-for="(step, i) in page.steps" :key="step.title" class="card step">
            <span class="step-num headline">{{ i + 1 }}</span>
            <p class="step-title headline">{{ step.title }}</p>
            <p class="step-body">{{ step.body }}</p>
          </li>
        </ol>

        <div class="db-cta">
          <a
            :href="store.verify.officialUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary db-btn"
          >
            {{ store.verify.officialCta }} &rarr;
          </a>
          <p class="source">{{ store.verify.source }}</p>
        </div>
      </div>
    </section>

    <!-- red flags -->
    <section class="section section-gray">
      <div class="wrap">
        <p class="eyebrow eyebrow-rule">Red Flags</p>
        <h2>{{ page.redFlags.heading }}</h2>
        <ul class="flags">
          <li v-for="flag in page.redFlags.items" :key="flag" class="flag">
            <span class="flag-mark" aria-hidden="true">&#10007;</span>
            <p class="flag-text">{{ flag }}</p>
          </li>
        </ul>

        <div class="card complaint">
          <p class="complaint-body">{{ page.complaint.body }}</p>
          <a
            :href="page.complaint.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-link"
          >
            {{ page.complaint.label }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.steps {
  display: grid;
  gap: 1.25rem;
}

.step {
  display: grid;
  gap: 0.625rem;
  align-content: start;
  padding: 2rem 1.75rem;
  border-top: 3px solid var(--blue);
}

.step-num {
  font-size: 2.5rem;
  line-height: 1;
  color: var(--pale-blue);
}

.step-title {
  font-size: 1.5rem;
}

.step-body {
  color: var(--slate);
  text-wrap: pretty;
}

.db-cta {
  margin-top: 3rem;
  text-align: center;
}

.db-btn {
  font-size: 1.0625rem;
  padding: 1.125rem 2.5rem;
}

.source {
  margin-top: 1rem;
  font-size: 0.8125rem;
  color: var(--slate);
}

/* ---------- red flags ---------- */
.flags {
  display: grid;
  gap: 1rem;
  margin-top: 2rem;
  max-width: 46rem;
}

.flag {
  display: flex;
  gap: 1rem;
  align-items: baseline;
}

.flag-mark {
  flex-shrink: 0;
  font-weight: 700;
  color: var(--red);
}

.flag-text {
  font-size: 1.0625rem;
  color: var(--navy);
  font-weight: 500;
}

.complaint {
  margin-top: 2.5rem;
  max-width: 46rem;
  border-left: 4px solid var(--red);
}

.complaint-body {
  color: var(--slate);
  text-wrap: pretty;
}

.complaint .text-link {
  display: inline-block;
  margin-top: 0.75rem;
}

@media (min-width: 900px) {
  .steps {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
