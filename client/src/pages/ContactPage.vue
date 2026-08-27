<script setup>
import { computed, reactive, ref } from 'vue'
import { useSiteStore } from '../features/site/site.store.js'
import BasePageHeader from '../core/components/BasePageHeader.vue'

const store = useSiteStore()

const telHref = computed(() => 'tel:' + store.site.phone.replace(/\D/g, ''))
const subheading = computed(() => 'Questions about licensing? Call ' + store.site.phone + '.')

const form = reactive({ name: '', email: '', message: '' })
const submitted = ref(false)

// Mockup only — no backend wired yet.
function submit() {
  submitted.value = true
}
</script>

<template>
  <div>
    <BasePageHeader eyebrow="Get In Touch" heading="Contact Us" :subheading="subheading" />

    <section class="section">
      <div class="wrap grid">
        <div>
          <h2 class="org">{{ store.site.name }}</h2>
          <p class="body-copy">{{ store.site.tagline }}</p>
          <a :href="telHref" class="phone headline">{{ store.site.phone }}</a>

          <p class="label">Follow Us</p>
          <ul class="social">
            <li v-for="link in store.social" :key="link.label">
              <a :href="link.url" target="_blank" rel="noopener noreferrer" class="social-link">
                {{ link.label }}
              </a>
            </li>
          </ul>

          <p class="fine">Powered by: {{ store.site.poweredBy }}</p>
        </div>

        <form class="card form" @submit.prevent="submit">
          <div class="row">
            <label for="name">Name</label>
            <input id="name" v-model="form.name" type="text" required class="field" />
          </div>
          <div class="row">
            <label for="email">Email</label>
            <input id="email" v-model="form.email" type="email" required class="field" />
          </div>
          <div class="row">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" rows="5" required class="field"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
          <p v-if="submitted" class="success">
            Thanks &mdash; this is a mockup, no message was sent.
          </p>
        </form>
      </div>
    </section>

    <section class="section section-pale">
      <div class="wrap join-band">
        <div>
          <p class="eyebrow eyebrow-rule">{{ store.join.eyebrow }}</p>
          <p class="join-line headline">{{ store.join.heading }} {{ store.join.lede }}</p>
        </div>
        <RouterLink to="/join" class="btn btn-primary">Join the Effort &rarr;</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  gap: 3rem;
  align-items: start;
}

.org {
  font-size: 1.75rem;
}

.phone {
  display: inline-block;
  margin-top: 1.5rem;
  font-size: 2rem;
  color: var(--blue);
}

.phone:hover {
  color: var(--navy);
}

.label {
  margin-top: 2.5rem;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--slate);
}

.social {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
}

.social-link {
  font-size: 0.9375rem;
}

.fine {
  margin-top: 2.5rem;
  font-size: 0.8125rem;
  color: var(--slate);
}

.form {
  display: grid;
  gap: 1.25rem;
  padding: 2rem;
}

.row {
  display: grid;
  gap: 0.375rem;
}

.row label {
  font-size: 0.9375rem;
  font-weight: 500;
}

.success {
  padding: 0.75rem 1rem;
  border-radius: var(--radius-btn);
  background: rgb(72 159 72 / 0.12);
  color: var(--green);
  font-size: 0.9375rem;
  font-weight: 500;
}

.join-band {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.join-line {
  margin-top: 0.75rem;
  font-size: 1.5rem;
  max-width: 34ch;
}

@media (min-width: 900px) {
  .grid {
    grid-template-columns: 1fr 1.1fr;
  }
}
</style>
