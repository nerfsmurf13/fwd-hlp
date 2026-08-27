<script setup>
import { useSiteStore } from '../features/site/site.store.js'
import SiteVerifyCard from '../features/site/SiteVerifyCard.vue'
import BaseIcon from '../core/components/BaseIcon.vue'
import mascot from '../assets/mascot.webp'

const store = useSiteStore()
</script>

<template>
  <div>
    <!-- Hero: white, mascot right over pale-blue circle -->
    <section class="hero">
      <div class="wrap hero-grid">
        <div class="hero-copy">
          <p class="eyebrow eyebrow-rule rise rise-1">{{ store.hero.eyebrow }}</p>
          <h1 class="hero-title rise rise-2">
            <span class="line">{{ store.hero.headline[0] }}</span>
            <span class="line line-accent">{{ store.hero.headline[1] }}</span>
          </h1>
          <p class="sub rise rise-3">{{ store.hero.body }}</p>
          <div class="hero-actions rise rise-4">
            <RouterLink to="/why-licensed" class="btn btn-primary">
              {{ store.hero.ctaPrimary }}
            </RouterLink>
            <RouterLink to="/partners" class="text-link">
              {{ store.hero.ctaSecondary }}
            </RouterLink>
          </div>
          <ul class="hero-checks rise rise-4">
            <li v-for="check in store.hero.checks" :key="check">
              <span class="tick">&check;</span> {{ check }}
            </li>
          </ul>
        </div>

        <div class="hero-mascot">
          <div class="mascot-stage">
            <img :src="mascot" alt="Vintage licensed plumber mascot" class="mascot-img" />
            <div class="mascot-base"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why plumbing matters: 4 cards -->
    <section class="section section-gray">
      <div class="wrap">
        <p class="eyebrow eyebrow-rule">The Stakes</p>
        <h2 class="protects-title">{{ store.protects.heading }}</h2>
        <p class="sub protects-sub">{{ store.protects.body }}</p>
        <ul class="protect-grid">
          <li v-for="card in store.protects.cards" :key="card.icon" class="card protect-card">
            <BaseIcon :name="card.icon" />
            <p class="protect-label headline">{{ card.title }}</p>
            <p class="protect-body">{{ card.body }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Sunset Act urgency band: why this site exists -->
    <section class="section section-navy">
      <div class="wrap sunset">
        <div>
          <p class="eyebrow eyebrow-rule">{{ store.sunset.eyebrow }}</p>
          <h2 class="sunset-title">{{ store.sunset.heading }}</h2>
          <p class="sunset-body">{{ store.sunset.body }}</p>
          <p class="sunset-closing headline">{{ store.sunset.closing }}</p>
        </div>
        <div class="sunset-cta">
          <RouterLink to="/join" class="btn btn-primary">{{ store.sunset.cta }} &rarr;</RouterLink>
        </div>
      </div>
    </section>

    <!-- License verification -->
    <SiteVerifyCard />

    <!-- History teaser -->
    <section class="section">
      <div class="wrap teaser">
        <div>
          <p class="eyebrow eyebrow-rule">{{ store.history.event.date }}</p>
          <h2 class="teaser-title">{{ store.history.event.title }}</h2>
          <p class="body-copy teaser-body">{{ store.history.event.body[0] }}</p>
          <RouterLink to="/history" class="text-link teaser-link">Read what happened</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ---------- hero ---------- */
.hero {
  background: var(--white);
  border-bottom: 1px solid var(--line);
  overflow: hidden;
}

.hero-grid {
  display: grid;
  gap: 3rem;
  padding-block: clamp(3.5rem, 7vw, 6.5rem) 0;
  align-items: end;
}

.hero-copy {
  padding-bottom: clamp(3.5rem, 7vw, 6.5rem);
}

.hero-title {
  margin-top: 1rem;
}

.hero-title .line {
  display: block;
}

.line-accent {
  color: var(--blue);
}

.hero .sub {
  margin-top: 1.5rem;
  max-width: 34rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.hero-checks {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2.5rem;
  font-size: 0.9375rem;
  color: var(--slate);
}

.tick {
  color: var(--green);
  font-weight: 700;
}

.hero-mascot {
  display: none;
  position: relative;
  justify-self: center;
}

.mascot-stage {
  position: relative;
  display: grid;
  justify-items: center;
}

/* pale-blue circle behind him */
.mascot-stage::before {
  content: "";
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  translate: -50% 0;
  width: 24rem;
  height: 24rem;
  border-radius: 999px;
  background: var(--pale-blue);
  z-index: 0;
}

.mascot-img {
  position: relative;
  z-index: 1;
  height: clamp(420px, 36vw, 500px);
  width: auto;
}

/* orange accent under his feet */
.mascot-base {
  position: relative;
  z-index: 2;
  width: 11rem;
  height: 6px;
  border-radius: 3px;
  background: var(--orange);
}

@media (min-width: 900px) {
  .hero-grid {
    grid-template-columns: 1.15fr 0.85fr;
  }

  .hero-mascot {
    display: block;
  }
}

/* ---------- protects ---------- */
.protects-title {
  margin-top: 0.75rem;
  max-width: 22ch;
}

.protects-sub {
  margin-top: 1rem;
  max-width: 48rem;
}

.protect-grid {
  display: grid;
  gap: 1rem;
  margin-top: 2.5rem;
}

.protect-card {
  display: grid;
  gap: 0.875rem;
  align-content: start;
  padding: 2rem 1.75rem;
  border-top: 3px solid var(--blue);
  transition: translate 0.2s ease, box-shadow 0.2s ease;
}

.protect-card:hover {
  translate: 0 -3px;
  box-shadow: 0 10px 24px rgb(0 35 73 / 0.08);
}

.protect-label {
  font-size: 1.375rem;
  letter-spacing: 0.04em;
}

.protect-body {
  font-size: 0.9375rem;
  color: var(--slate);
}

@media (min-width: 640px) {
  .protect-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .protect-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* ---------- teaser ---------- */
.teaser-title {
  margin-top: 0.75rem;
}

.teaser-body {
  margin-top: 1rem;
  max-width: 42rem;
  font-size: 1.0625rem;
}

.teaser-link {
  display: inline-block;
  margin-top: 1.5rem;
}

/* ---------- sunset band ---------- */
.sunset {
  display: grid;
  gap: 2.5rem;
  align-items: center;
}

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

@media (min-width: 900px) {
  .sunset {
    grid-template-columns: 1fr auto;
  }
}
</style>
