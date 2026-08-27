import { defineStore } from 'pinia'
import * as content from './site.content.js'

export const useSiteStore = defineStore('site', {
  state: () => ({
    site: content.site,
    nav: content.nav,
    hero: content.hero,
    protects: content.protects,
    verify: content.verify,
    home: content.home,
    about: content.about,
    sunset: content.sunset,
    join: content.join,
    history: content.history,
    regulations: content.regulations,
    resources: content.resources,
    social: content.social,
    menuOpen: false
  }),
  actions: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    }
  }
})
