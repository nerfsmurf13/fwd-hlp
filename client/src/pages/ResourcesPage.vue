<script setup>
import { useSiteStore } from '../features/site/site.store.js'
import BasePageHeader from '../core/components/BasePageHeader.vue'

const store = useSiteStore()

function embedUrl(youtubeId) {
  return 'https://www.youtube.com/embed/' + youtubeId
}
</script>

<template>
  <div>
    <BasePageHeader
      eyebrow="Spread the Word"
      :heading="store.resources.heading"
      :subheading="store.resources.subheading"
    />

    <!-- newsroom-style videos: featured left, rest right -->
    <section class="section">
      <div class="wrap">
        <p class="eyebrow eyebrow-rule">Watch</p>
        <h2>{{ store.resources.skits.label }}</h2>
        <p class="sub skits-sub">{{ store.resources.skits.body }}</p>
        <div class="news-grid">
          <figure
            v-for="(video, i) in store.resources.videos"
            :key="video.youtubeId"
            :class="i === 0 ? 'featured' : 'secondary'"
          >
            <div class="frame">
              <iframe
                :src="embedUrl(video.youtubeId)"
                :title="video.title"
                loading="lazy"
                allowfullscreen
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <figcaption class="video-caption">
              <span class="category">{{ video.category }}</span>
              <span class="video-title">{{ video.title }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="section section-gray">
      <div class="wrap">
        <p class="eyebrow eyebrow-rule">Spread the Word</p>
        <h2>Downloads</h2>
        <ul class="downloads">
          <li v-for="doc in store.resources.documents" :key="doc.url" class="card download">
            <div>
              <p class="doc-title">{{ doc.title }}</p>
              <p class="doc-type">{{ doc.type }}</p>
            </div>
            <a
              :href="doc.url"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              Download
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.skits-sub {
  margin-top: 1rem;
  max-width: 48rem;
}

.news-grid {
  display: grid;
  gap: 2rem;
  margin-top: 2.5rem;
}

.frame {
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-card);
  overflow: hidden;
  background: var(--navy);
  border: 1px solid var(--line);
}

.frame iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.video-caption {
  display: grid;
  gap: 0.25rem;
  margin-top: 0.875rem;
}

.category {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--blue);
}

.video-title {
  font-family: var(--font-head);
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 1.15;
  color: var(--navy);
}

.featured .video-title {
  font-size: 1.75rem;
}

.downloads {
  display: grid;
  gap: 1rem;
  margin-top: 2rem;
  max-width: 46rem;
}

.download {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.doc-title {
  font-weight: 600;
}

.doc-type {
  font-size: 0.8125rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--slate);
}

@media (min-width: 900px) {
  .news-grid {
    grid-template-columns: 1.4fr 1fr;
    align-items: start;
  }
}
</style>
