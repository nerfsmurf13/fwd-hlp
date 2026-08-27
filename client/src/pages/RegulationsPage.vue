<script setup>
import { useSiteStore } from '../features/site/site.store.js'
import BasePageHeader from '../core/components/BasePageHeader.vue'
import BaseCallout from '../core/components/BaseCallout.vue'
import SiteVerifyCard from '../features/site/SiteVerifyCard.vue'

const store = useSiteStore()
</script>

<template>
  <div>
    <BasePageHeader
      eyebrow="State Requirements"
      :heading="store.regulations.heading"
      :subheading="store.regulations.subheading"
    />

    <section class="section">
      <div class="wrap">
        <div class="prose">
          <p v-for="(para, i) in store.regulations.body" :key="i" class="body-copy">
            {{ para }}
          </p>
        </div>

        <div class="prompts">
          <div v-for="(prompt, i) in store.regulations.prompts" :key="i" class="card prompt">
            <p class="prompt-text headline">{{ prompt }}</p>
          </div>
        </div>

        <div class="authority card">
          <p class="eyebrow">Governing Authority &middot; Since 1947</p>
          <p class="authority-name headline">{{ store.regulations.authority.name }}</p>
          <p class="authority-abbr">{{ store.regulations.authority.abbr }}</p>
          <p class="authority-body">{{ store.regulations.authority.body }}</p>
        </div>

        <BaseCallout class="gap-top">
          {{ store.regulations.didYouKnow }}
        </BaseCallout>

        <!-- state-by-state comparison — future build -->
        <div class="placeholder">
          <p>State-by-state comparison table &mdash; to be built</p>
        </div>
      </div>
    </section>

    <!-- the law itself -->
    <section class="section section-gray">
      <div class="wrap">
        <p class="eyebrow eyebrow-rule">Public Record</p>
        <h2 class="law-title">{{ store.regulations.lawLinks.heading }}</h2>
        <p class="sub law-sub">{{ store.regulations.lawLinks.body }}</p>

        <div class="law-groups">
          <div
            v-for="group in store.regulations.lawLinks.groups"
            :key="group.label"
            class="card law-group"
          >
            <p class="law-label headline">{{ group.label }}</p>
            <ul class="law-list">
              <li v-for="link in group.links" :key="link.url" class="law-item">
                <a :href="link.url" target="_blank" rel="noopener noreferrer" class="text-link">
                  {{ link.title }}
                </a>
                <p class="law-note">{{ link.note }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section">
      <div class="wrap">
        <p class="eyebrow eyebrow-rule">Common Questions</p>
        <h2 class="faq-title">{{ store.regulations.faq.heading }}</h2>
        <p class="sub faq-sub">{{ store.regulations.faq.subheading }}</p>

        <div class="faq-list">
          <details v-for="item in store.regulations.faq.items" :key="item.q" class="faq-item">
            <summary class="faq-q">
              <span>{{ item.q }}</span>
              <span class="faq-marker" aria-hidden="true"></span>
            </summary>
            <div class="faq-a">
              <p class="body-copy">{{ item.a }}</p>
              <a
                v-if="item.link"
                :href="item.link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-link faq-link"
              >
                {{ item.link.label }}
              </a>
            </div>
          </details>
        </div>
      </div>
    </section>

    <SiteVerifyCard />
  </div>
</template>

<style scoped>
.prose {
  display: grid;
  gap: 1.25rem;
  max-width: 46rem;
}

.prompts {
  display: grid;
  gap: 1rem;
  margin-top: 2.5rem;
}

.prompt {
  border-left: 4px solid var(--blue);
}

.prompt-text {
  font-size: 1.5rem;
}

.authority {
  margin-top: 2.5rem;
  max-width: 40rem;
  background: var(--pale-blue-soft);
  border-color: var(--pale-blue);
}

.authority-name {
  margin-top: 0.5rem;
  font-size: 1.5rem;
}

.authority-abbr {
  color: var(--slate);
  font-size: 0.9375rem;
}

.authority-body {
  margin-top: 1rem;
  color: var(--slate);
  text-wrap: pretty;
}

.gap-top {
  margin-top: 2.5rem;
}

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

/* ---------- law links ---------- */
.law-title {
  margin-top: 0.75rem;
}

.law-sub {
  margin-top: 1rem;
}

.law-groups {
  display: grid;
  gap: 1.25rem;
  margin-top: 2.5rem;
}

.law-group {
  border-top: 3px solid var(--navy);
}

.law-label {
  font-size: 1.375rem;
}

.law-list {
  display: grid;
  gap: 1.25rem;
  margin-top: 1.25rem;
}

.law-note {
  margin-top: 0.125rem;
  font-size: 0.875rem;
  color: var(--slate);
}

/* ---------- FAQ ---------- */
.faq-title {
  margin-top: 0.75rem;
}

.faq-sub {
  margin-top: 1rem;
}

.faq-list {
  margin-top: 2.5rem;
  max-width: 52rem;
  border-top: 1px solid var(--line);
}

.faq-item {
  border-bottom: 1px solid var(--line);
}

.faq-q {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.375rem 0.25rem;
  font-family: var(--font-head);
  font-weight: 600;
  font-size: 1.375rem;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 1.15;
  color: var(--navy);
  cursor: pointer;
  list-style: none;
  transition: color 0.15s ease;
}

.faq-q::-webkit-details-marker {
  display: none;
}

.faq-q:hover {
  color: var(--blue);
}

/* plus / minus marker */
.faq-marker {
  position: relative;
  flex-shrink: 0;
  width: 1.125rem;
  height: 1.125rem;
}

.faq-marker::before,
.faq-marker::after {
  content: "";
  position: absolute;
  inset: 0;
  margin: auto;
  background: var(--orange);
  transition: rotate 0.2s ease;
}

.faq-marker::before {
  width: 100%;
  height: 3px;
}

.faq-marker::after {
  width: 3px;
  height: 100%;
}

.faq-item[open] .faq-marker::after {
  rotate: 90deg;
  opacity: 0;
}

.faq-a {
  padding: 0 0.25rem 1.5rem;
  max-width: 46rem;
}

.faq-link {
  display: inline-block;
  margin-top: 0.875rem;
}

@media (min-width: 640px) {
  .prompts {
    grid-template-columns: repeat(2, 1fr);
  }

  .law-groups {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
