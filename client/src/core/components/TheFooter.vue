<script setup>
import { computed } from 'vue'
import { useSiteStore } from '../../features/site/site.store.js'
import mascot from '../../assets/mascot-badge.webp'

const store = useSiteStore()

const telHref = computed(() => 'tel:' + store.site.phone.replace(/\D/g, ''))
</script>

<template>
  <footer class="footer">
    <div class="wrap cols">
      <div class="about">
        <img :src="mascot" alt="" class="footer-mascot" />
        <p class="name headline">Hire Licensed Plumbers</p>
        <p class="mission">
          Protecting Texans through plumbing education and licensed professionals.
        </p>
        <a :href="telHref" class="phone">{{ store.site.phone }}</a>
      </div>

      <nav aria-label="Footer">
        <p class="label">Explore</p>
        <ul>
          <li v-for="item in store.nav" :key="item.name">
            <RouterLink :to="item.path" class="link">{{ item.label }}</RouterLink>
          </li>
        </ul>
      </nav>

      <div>
        <p class="label">Follow Us</p>
        <ul>
          <li v-for="link in store.social" :key="link.label">
            <a :href="link.url" target="_blank" rel="noopener noreferrer" class="link">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="wrap meta">
      <p>
        Texas plumbing license information:
        <a
          href="https://tsbpe.texas.gov"
          target="_blank"
          rel="noopener noreferrer"
          class="tsbpe"
        >
          Texas State Board of Plumbing Examiners
        </a>
      </p>
      <p class="fine">{{ store.site.copyright }} Powered by: {{ store.site.poweredBy }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: var(--section-pad);
  background: var(--navy);
  color: rgb(255 255 255 / 0.85);
  font-size: 0.9375rem;
}

.cols {
  display: grid;
  gap: 2.5rem;
  padding-block: 4rem 3rem;
}

.footer-mascot {
  height: 5rem;
  width: auto;
  border-radius: 4px;
  background: var(--white);
  padding: 0.25rem;
}

.name {
  margin-top: 1rem;
  font-size: 1.5rem;
  color: var(--white);
}

.mission {
  margin-top: 0.5rem;
  max-width: 22rem;
}

.phone {
  display: inline-block;
  margin-top: 1rem;
  font-weight: 600;
  color: var(--orange);
}

.label {
  font-family: var(--font-head);
  font-weight: 600;
  font-size: 1.0625rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--white);
  margin-bottom: 0.75rem;
}

.link {
  display: inline-block;
  padding-block: 0.2rem;
  color: rgb(255 255 255 / 0.85);
  transition: color 0.15s ease;
}

.link:hover {
  color: var(--orange);
}

.meta {
  border-top: 1px solid rgb(255 255 255 / 0.15);
  padding-block: 1.5rem;
  font-size: 0.8125rem;
  color: rgb(255 255 255 / 0.7);
}

.tsbpe {
  color: var(--white);
  text-decoration: underline;
}

.fine {
  margin-top: 0.5rem;
}

@media (min-width: 768px) {
  .cols {
    grid-template-columns: 2fr 1fr 1fr;
  }
}
</style>
