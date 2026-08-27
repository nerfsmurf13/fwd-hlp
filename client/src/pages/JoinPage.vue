<script setup>
import { useSiteStore } from '../features/site/site.store.js'
import BasePageHeader from '../core/components/BasePageHeader.vue'

const store = useSiteStore()
</script>

<template>
  <div>
    <BasePageHeader
      :eyebrow="store.join.eyebrow"
      :heading="store.join.heading"
      :subheading="store.join.lede"
    />

    <!-- why the campaign exists -->
    <section class="section">
      <div class="wrap">
        <div class="prose">
          <p v-for="(para, i) in store.join.body" :key="i" class="body-copy">{{ para }}</p>
        </div>
      </div>
    </section>

    <!-- sunset urgency -->
    <section class="section section-navy">
      <div class="wrap">
        <p class="eyebrow eyebrow-rule">{{ store.sunset.eyebrow }}</p>
        <h2 class="sunset-title">{{ store.sunset.heading }}</h2>
        <p class="sunset-body">{{ store.sunset.body }}</p>
        <p class="sunset-closing headline">{{ store.sunset.closing }}</p>
      </div>
    </section>

    <!-- three ways to help -->
    <section class="section section-gray">
      <div class="wrap">
        <p class="eyebrow eyebrow-rule">How to Help</p>
        <h2>Three Ways to Ride With Us</h2>
        <ol class="ways">
          <li v-for="(way, i) in store.join.ways" :key="way.title" class="card way">
            <span class="way-num headline">{{ i + 1 }}</span>
            <p class="way-title headline">{{ way.title }}</p>
            <p class="way-body">{{ way.body }}</p>
            <RouterLink :to="way.to" class="text-link way-link">{{ way.cta }}</RouterLink>
          </li>
        </ol>
      </div>
    </section>

    <!-- trusted partners -->
    <section class="section">
      <div class="wrap">
        <p class="eyebrow eyebrow-rule">For Homeowners &amp; Companies Alike</p>
        <h2>{{ store.join.partners.heading }}</h2>
        <div class="prose gap-top">
          <p v-for="(para, i) in store.join.partners.body" :key="i" class="body-copy">
            {{ para }}
          </p>
        </div>
        <div class="placeholder">
          <p>{{ store.join.partners.placeholder }}</p>
        </div>
        <div class="cta-row">
          <RouterLink to="/contact" class="btn btn-primary">Become a Partner</RouterLink>
          <a :href="'tel:' + store.site.phone.replace(/\D/g, '')" class="text-link">
            Or call {{ store.site.phone }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.prose {
  display: grid;
  gap: 1.25rem;
  max-width: 46rem;
}

.gap-top {
  margin-top: 1.5rem;
}

/* ---------- sunset ---------- */
.sunset-title {
  margin-top: 0.75rem;
  max-width: 24ch;
}

.sunset-body {
  margin-top: 1.25rem;
  max-width: 46rem;
  text-wrap: pretty;
}

.sunset-closing {
  margin-top: 1.5rem;
  font-size: 1.375rem;
  letter-spacing: 0.03em;
  max-width: 38ch;
  color: var(--orange);
}

/* ---------- ways ---------- */
.ways {
  display: grid;
  gap: 1.25rem;
  margin-top: 2.5rem;
}

.way {
  display: grid;
  gap: 0.75rem;
  align-content: start;
  padding: 2rem 1.75rem;
  border-top: 3px solid var(--orange);
}

.way-num {
  font-size: 2.5rem;
  line-height: 1;
  color: var(--pale-blue);
}

.way-title {
  font-size: 1.5rem;
}

.way-body {
  color: var(--slate);
  text-wrap: pretty;
}

.way-link {
  margin-top: 0.25rem;
}

/* ---------- partners ---------- */
.placeholder {
  margin-top: 2.5rem;
  border: 2px dashed var(--line);
  border-radius: var(--radius-card);
  padding: 3rem;
  text-align: center;
  color: var(--slate);
  font-size: 0.9375rem;
  font-weight: 500;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

@media (min-width: 900px) {
  .ways {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
