<script setup>
import { useSiteStore } from '../../features/site/site.store.js'
import mascot from '../../assets/mascot.jpg'

const store = useSiteStore()
</script>

<template>
  <header class="header">
    <div class="wrap bar">
      <RouterLink to="/" class="brand" @click="store.closeMenu()">
        <img :src="mascot" alt="" class="brand-mascot" />
        <span class="brand-text headline">Hire Licensed<br />Plumbers</span>
      </RouterLink>

      <nav class="nav-desktop" aria-label="Main">
        <RouterLink
          v-for="item in store.nav"
          :key="item.name"
          :to="item.path"
          class="nav-link"
          active-class="is-active"
        >
          {{ item.label }}
        </RouterLink>
        <RouterLink to="/verify" class="btn btn-primary nav-cta">Verify License</RouterLink>
      </nav>

      <button
        class="toggle"
        :aria-expanded="store.menuOpen"
        aria-label="Toggle navigation"
        @click="store.toggleMenu()"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path v-if="!store.menuOpen" stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>

    <nav v-if="store.menuOpen" class="nav-mobile" aria-label="Main">
      <RouterLink
        v-for="item in store.nav"
        :key="item.name"
        :to="item.path"
        class="nav-link"
        active-class="is-active"
        @click="store.closeMenu()"
      >
        {{ item.label }}
      </RouterLink>
      <RouterLink
        to="/verify"
        class="btn btn-primary nav-cta-mobile"
        @click="store.closeMenu()"
      >
        Verify License
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--white);
  border-bottom: 1px solid var(--line);
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-block: 0.625rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

.brand-mascot {
  height: 2.75rem;
  width: auto;
}

.brand-text {
  font-size: 1.125rem;
  line-height: 0.95;
  color: var(--navy);
}

.nav-desktop {
  display: none;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  display: block;
  padding: 0.5rem 0.625rem;
  border-radius: var(--radius-btn);
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--navy);
  transition: color 0.15s ease, background-color 0.15s ease;
}

.nav-link:hover {
  color: var(--blue);
}

.nav-link.is-active {
  color: var(--blue);
  background: var(--gray);
}

.nav-cta {
  margin-left: 0.75rem;
  padding: 0.5rem 1.125rem;
  font-size: 0.8125rem;
}

.toggle {
  display: grid;
  place-items: center;
  padding: 0.5rem;
  border: 0;
  border-radius: var(--radius-btn);
  background: transparent;
  color: var(--navy);
  cursor: pointer;
}

.toggle:hover {
  background: var(--gray);
}

.toggle svg {
  width: 1.5rem;
  height: 1.5rem;
}

.nav-mobile {
  border-top: 1px solid var(--line);
  background: var(--white);
  padding: 0.5rem 1.25rem 1.25rem;
}

.nav-cta-mobile {
  display: block;
  margin-top: 0.75rem;
  text-align: center;
}

@media (min-width: 1024px) {
  .nav-desktop {
    display: flex;
  }

  .toggle,
  .nav-mobile {
    display: none;
  }
}
</style>
