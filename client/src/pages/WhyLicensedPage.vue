<script setup>
import { useSiteStore } from '../features/site/site.store.js'
import BasePageHeader from '../core/components/BasePageHeader.vue'
import BaseIcon from '../core/components/BaseIcon.vue'
import BaseCallout from '../core/components/BaseCallout.vue'

const store = useSiteStore()
</script>

<template>
  <div>
    <BasePageHeader
      eyebrow="The Question"
      :heading="store.home.heading"
      :subheading="store.home.subheading"
    />

    <section class="section">
      <div class="wrap">
        <h2 class="narrow">{{ store.protects.heading }}</h2>
        <p class="sub gap-top">{{ store.protects.body }}</p>
        <ul class="protect-grid">
          <li v-for="card in store.protects.cards" :key="card.icon" class="card protect-card">
            <BaseIcon :name="card.icon" />
            <p class="protect-label headline">{{ card.title }}</p>
            <p class="protect-body">{{ card.body }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="section section-gray">
      <div class="wrap">
        <p class="eyebrow eyebrow-rule">{{ store.home.missionEyebrow }}</p>
        <h2 class="mission-title">{{ store.home.missionHeading }}</h2>
        <p class="sub">{{ store.home.intro }}</p>

        <ol class="questions">
          <li v-for="(question, i) in store.home.questions" :key="i" class="card question">
            <span class="num headline">{{ i + 1 }}</span>
            <p class="question-text headline">{{ question }}</p>
          </li>
        </ol>

        <h3 class="objectives-heading headline">{{ store.home.objectivesHeading }}</h3>
        <ol class="objectives">
          <li v-for="(objective, i) in store.home.objectives" :key="i" class="card objective">
            <p class="objective-label">Objective {{ i + 1 }}</p>
            <p class="objective-text">{{ objective }}</p>
          </li>
        </ol>

        <BaseCallout class="gap-top-lg">
          {{ store.regulations.didYouKnow }}
        </BaseCallout>
      </div>
    </section>

    <!-- about the founders -->
    <section class="section">
      <div class="wrap">
        <p class="eyebrow eyebrow-rule">{{ store.about.eyebrow }}</p>
        <h2 class="narrow">{{ store.about.heading }}</h2>
        <div class="about-prose">
          <p v-for="(para, i) in store.about.body" :key="i" class="body-copy">{{ para }}</p>
        </div>
      </div>
    </section>

    <section class="section section-pale">
      <div class="wrap cta-band">
        <p class="cta-text headline">{{ store.resources.subheading }}</p>
        <RouterLink to="/resources" class="btn btn-primary">Get the Brochure</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.narrow {
  max-width: 22ch;
}

.gap-top {
  margin-top: 1rem;
}

.gap-top-lg {
  margin-top: 3.5rem;
}

.protect-grid {
  display: grid;
  gap: 1rem;
  margin-top: 2.5rem;
}

.protect-card {
  display: grid;
  gap: 1rem;
  padding: 2rem 1.75rem;
}

.protect-label {
  font-size: 1.375rem;
  letter-spacing: 0.04em;
}

.protect-body {
  font-size: 0.9375rem;
  color: var(--slate);
}

.about-prose {
  display: grid;
  gap: 1.25rem;
  margin-top: 1.25rem;
  max-width: 46rem;
}

.mission-title {
  max-width: 26ch;
}

.mission-title + .sub {
  margin-top: 1rem;
}

.questions {
  display: grid;
  gap: 1.25rem;
  margin-top: 2rem;
}

.question {
  display: flex;
  gap: 1.25rem;
  align-items: baseline;
  padding: 2rem 1.75rem;
  border-top: 3px solid var(--blue);
}

.num {
  font-size: 3rem;
  line-height: 1;
  color: var(--pale-blue);
  flex-shrink: 0;
}

.question-text {
  font-size: 1.5rem;
  line-height: 1.15;
}

.objectives-heading {
  margin-top: 3.5rem;
  font-size: var(--text-h3);
}

.objectives {
  display: grid;
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.objective {
  padding: 2rem 1.75rem;
  border-top: 3px solid var(--orange);
}

.objective-label {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--orange-dark);
}

.objective-text {
  margin-top: 0.75rem;
  color: var(--slate);
  text-wrap: pretty;
}

.cta-band {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.cta-text {
  font-size: 1.75rem;
  max-width: 26ch;
}

@media (min-width: 640px) {
  .protect-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .questions,
  .objectives {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .protect-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
