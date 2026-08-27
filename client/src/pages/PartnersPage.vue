<script setup>
import { useSiteStore } from '../features/site/site.store.js'
import BasePageHeader from '../core/components/BasePageHeader.vue'

const store = useSiteStore()
</script>

<template>
  <div>
    <BasePageHeader
      :eyebrow="store.partners.eyebrow"
      :heading="store.partners.heading"
      :subheading="store.partners.subheading"
    />

    <section class="section">
      <div class="wrap">
        <ul class="grid">
          <li v-for="co in store.partners.companies" :key="co.name" class="card partner">
            <!-- banner -->
            <div class="banner" :class="'banner-' + co.accent">
              <span class="monogram headline">{{ co.monogram }}</span>
              <span class="badge-partner">2026 Trusted Partner &check;</span>
            </div>

            <div class="body">
              <p class="name headline">{{ co.name }}</p>
              <p class="city">{{ co.city }}, Texas</p>

              <p class="bio">{{ co.bio }}</p>

              <div class="rmp">
                <p class="rmp-name">{{ co.rmp }}</p>
                <p class="rmp-meta">
                  Responsible Master Plumber &middot; <strong>{{ co.license }}</strong>
                </p>
              </div>

              <!-- video slot -->
              <div class="video">
                <span class="play" aria-hidden="true">&#9658;</span>
                <span>{{ store.partners.videoNote }}</span>
              </div>

              <p class="phone">{{ co.phone }}</p>
            </div>
          </li>
        </ul>

        <p class="note">{{ store.partners.note }}</p>
      </div>
    </section>

    <section class="section section-navy">
      <div class="wrap cta-band">
        <div>
          <h2 class="cta-title">{{ store.partners.cta.text }}</h2>
          <p class="cta-body">{{ store.partners.cta.body }}</p>
        </div>
        <RouterLink to="/join" class="btn btn-primary">
          {{ store.partners.cta.label }} &rarr;
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  gap: 1.5rem;
}

.partner {
  padding: 0;
  overflow: hidden;
  display: grid;
  grid-template-rows: auto 1fr;
  transition: translate 0.2s ease, box-shadow 0.2s ease;
}

.partner:hover {
  translate: 0 -3px;
  box-shadow: 0 10px 24px rgb(0 35 73 / 0.1);
}

/* ---------- banner ---------- */
.banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 1.75rem;
}

.banner-navy {
  background: var(--navy);
}

.banner-blue {
  background: var(--blue);
}

.banner-orange {
  background: var(--orange-dark);
}

.monogram {
  font-size: 2.25rem;
  line-height: 1;
  color: var(--white);
  opacity: 0.95;
}

.badge-partner {
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: rgb(255 255 255 / 0.15);
  border: 1px solid rgb(255 255 255 / 0.35);
  color: var(--white);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
}

/* ---------- body ---------- */
.body {
  display: grid;
  gap: 1rem;
  align-content: start;
  padding: 1.5rem 1.75rem 1.75rem;
}

.name {
  font-size: 1.5rem;
}

.city {
  margin-top: -0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--slate);
}

.bio {
  color: var(--slate);
  font-size: 0.9375rem;
  text-wrap: pretty;
}

.rmp {
  border-left: 3px solid var(--green);
  padding-left: 0.875rem;
}

.rmp-name {
  font-weight: 600;
}

.rmp-meta {
  font-size: 0.8125rem;
  color: var(--slate);
}

.video {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  border: 1px dashed var(--line);
  border-radius: var(--radius-btn);
  background: var(--gray);
  font-size: 0.875rem;
  color: var(--slate);
}

.play {
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  background: var(--navy);
  color: var(--white);
  font-size: 0.75rem;
  flex-shrink: 0;
}

.phone {
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--blue);
}

.note {
  margin-top: 2rem;
  font-size: 0.8125rem;
  color: var(--slate);
  text-align: center;
}

/* ---------- cta ---------- */
.cta-band {
  display: grid;
  gap: 2rem;
  align-items: center;
}

.cta-title {
  max-width: 24ch;
}

.cta-body {
  margin-top: 1rem;
  max-width: 44rem;
  text-wrap: pretty;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .cta-band {
    grid-template-columns: 1fr auto;
  }
}
</style>
