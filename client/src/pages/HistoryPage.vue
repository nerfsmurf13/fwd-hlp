<script setup>
import { useSiteStore } from '../features/site/site.store.js'
import BasePageHeader from '../core/components/BasePageHeader.vue'
import licenseArtifact from '../assets/license-artifact.webp'
import newLondon from '../assets/new-london.webp'

const store = useSiteStore()

// Chronological chapter flow: Local Era → New London (1937) → statewide law
// (1947) → maturing framework → Sunset crisis. eras[0] precedes the disaster;
// the rest follow it.
const eraLocal = store.history.eras[0]
const erasAfter = store.history.eras.slice(1)
</script>

<template>
  <div>
    <BasePageHeader
      eyebrow="1897 — Today"
      :heading="store.history.heading"
      :subheading="store.history.lede"
    />

    <!-- The story at a glance: scannable roadmap before the deep dive -->
    <section class="section glance-section">
      <div class="wrap">
        <p class="eyebrow eyebrow-rule">{{ store.history.glance }}</p>
        <ol class="glance">
          <li v-for="entry in store.history.timeline" :key="entry.year" class="glance-item">
            <span class="glance-year headline">{{ entry.year }}</span>
            <p class="glance-text">{{ entry.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Chapter 1: The Local Era (1897–1947) -->
    <section class="section chapter">
      <div class="wrap">
        <p class="eyebrow eyebrow-rule">Chapter 1 &middot; {{ eraLocal.eyebrow }}</p>
        <h2 class="chapter-title">{{ eraLocal.title }}</h2>
        <div class="prose">
          <p v-for="(para, i) in eraLocal.body" :key="i" class="body-copy">{{ para }}</p>
        </div>
      </div>
    </section>

    <!-- Chapter 2: New London — navy memorial band, with the 1938 license as aftermath -->
    <section class="section section-navy">
      <div class="wrap">
        <p class="eyebrow eyebrow-rule">Chapter 2 &middot; {{ store.history.event.date }}</p>
        <h2 class="event-title">{{ store.history.event.title }}</h2>
        <p class="kicker">{{ store.history.event.kicker }}</p>

        <div class="event">
          <div class="prose event-prose">
            <p
              v-for="(para, i) in store.history.event.body"
              :key="i"
              :class="{ closing: i === store.history.event.body.length - 1 }"
            >
              {{ para }}
            </p>
          </div>
          <figure class="event-figure">
            <img
              :src="newLondon"
              alt="Aftermath of the New London School Explosion"
              class="event-img"
            />
          </figure>
        </div>

        <dl class="stats">
          <div v-for="stat in store.history.event.stats" :key="stat.label" class="stat">
            <dt class="stat-label">{{ stat.label }}</dt>
            <dd class="stat-value headline">{{ stat.value }}</dd>
          </div>
        </dl>

        <div class="aftermath-grid">
          <p class="aftermath">{{ store.history.event.aftermath }}</p>
          <figure class="artifact">
            <img :src="licenseArtifact" :alt="store.history.artifact" class="artifact-img" />
            <figcaption class="artifact-caption">{{ store.history.artifact }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Chapters 3–4: statewide law, maturing framework -->
    <section
      v-for="(era, i) in erasAfter"
      :key="era.id"
      class="section chapter"
      :class="{ 'section-gray': i % 2 === 1 }"
    >
      <div class="wrap">
        <p class="eyebrow eyebrow-rule">Chapter {{ i + 3 }} &middot; {{ era.eyebrow }}</p>
        <h2 class="chapter-title">{{ era.title }}</h2>
        <div class="prose">
          <p v-for="(para, j) in era.body" :key="j" class="body-copy">{{ para }}</p>
        </div>
      </div>
    </section>

    <!-- Chapter 5: The Sunset Crisis -->
    <section class="section chapter">
      <div class="wrap">
        <p class="eyebrow eyebrow-rule">Chapter 5 &middot; {{ store.history.crisis.eyebrow }}</p>
        <h2 class="crisis-title">{{ store.history.crisis.title }}</h2>
        <p class="crisis-kicker">{{ store.history.crisis.kicker }}</p>

        <div class="prose crisis-prose">
          <p v-for="(para, i) in store.history.crisis.body" :key="i" class="body-copy">
            {{ para }}
          </p>
        </div>

        <div class="card takeaway">
          <p class="takeaway-label headline"><span class="highlight">The Point</span></p>
          <p class="takeaway-text">{{ store.history.crisis.takeaway }}</p>
        </div>

        <div class="card modern">
          <p class="modern-title headline">{{ store.history.crisis.modern.title }}</p>
          <p class="modern-body">{{ store.history.crisis.modern.body }}</p>
        </div>
      </div>
    </section>

    <section class="section section-pale">
      <div class="wrap closing-band">
        <p class="closing-line headline">
          This is why licensing exists: <span class="highlight">{{ store.site.tagline }}</span>
        </p>
        <RouterLink to="/join" class="btn btn-primary">Join the Effort</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ---------- at-a-glance timeline ---------- */
.glance-section {
  padding-block: clamp(3rem, 6vw, 4.5rem);
  border-bottom: 1px solid var(--line);
}

.glance {
  display: grid;
  gap: 1.75rem 2rem;
  margin-top: 2rem;
}

.glance-item {
  border-left: 3px solid var(--pale-blue);
  padding-left: 1rem;
}

.glance-year {
  font-size: 1.5rem;
  color: var(--blue);
}

.glance-text {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: var(--slate);
  text-wrap: pretty;
}

/* ---------- chapters ---------- */
.chapter-title {
  max-width: 28ch;
}

.prose {
  display: grid;
  gap: 1.25rem;
  margin-top: 1.25rem;
  max-width: 46rem;
}

/* ---------- New London band ---------- */
.event-title {
  margin-top: 0.75rem;
}

.kicker {
  margin-top: 0.5rem;
  font-size: 1.125rem;
  color: rgb(255 255 255 / 0.7);
  font-style: italic;
}

.event {
  display: grid;
  gap: 3rem;
  align-items: start;
  margin-top: 2.5rem;
}

.event-prose {
  margin-top: 0;
}

.event-prose p {
  text-wrap: pretty;
}

.event-prose .closing {
  font-weight: 600;
  color: var(--white);
}

.event-figure {
  max-width: 30rem;
}

.event-img {
  border-radius: var(--radius-card);
  border: 1px solid rgb(255 255 255 / 0.2);
}

.stats {
  display: grid;
  gap: 1.5rem;
  margin: 3rem 0 0;
  padding-top: 2.5rem;
  border-top: 1px solid rgb(255 255 255 / 0.15);
}

.stat {
  display: grid;
}

.stat-value {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  line-height: 1;
  color: var(--orange);
  order: -1;
}

.stat-label {
  margin-top: 0.5rem;
  font-size: 0.9375rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgb(255 255 255 / 0.7);
}

.aftermath-grid {
  display: grid;
  gap: 2.5rem;
  align-items: center;
  margin-top: 2.5rem;
}

.aftermath {
  max-width: 48rem;
  font-size: 1.125rem;
  color: rgb(255 255 255 / 0.88);
  text-wrap: pretty;
}

.artifact {
  max-width: 22rem;
}

.artifact-img {
  border-radius: var(--radius-card);
  border: 1px solid rgb(255 255 255 / 0.25);
}

.artifact-caption {
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: rgb(255 255 255 / 0.7);
}

/* ---------- sunset crisis ---------- */
.crisis-title {
  margin-top: 0.75rem;
  max-width: 28ch;
}

.crisis-kicker {
  margin-top: 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--red);
  max-width: 40ch;
  text-wrap: pretty;
}

.crisis-prose {
  margin-top: 1.75rem;
}

.takeaway {
  margin-top: 2.5rem;
  max-width: 52rem;
  border-left: 4px solid var(--orange);
}

.takeaway-label {
  font-size: 1.25rem;
}

.takeaway-text {
  margin-top: 0.5rem;
  color: var(--slate);
  text-wrap: pretty;
}

.modern {
  margin-top: 1.25rem;
  max-width: 52rem;
  background: var(--pale-blue-soft);
  border-color: var(--pale-blue);
}

.modern-title {
  font-size: 1.375rem;
}

.modern-body {
  margin-top: 0.5rem;
  color: var(--slate);
  text-wrap: pretty;
}

/* ---------- closing ---------- */
.closing-band {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.closing-line {
  font-size: 1.75rem;
  max-width: 30ch;
}

@media (min-width: 640px) {
  .glance {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 900px) {
  .event {
    grid-template-columns: 1.1fr 0.9fr;
  }

  .aftermath-grid {
    grid-template-columns: 1.4fr 1fr;
  }
}

@media (min-width: 1024px) {
  .glance {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
