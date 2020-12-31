// Import barba from modules
import barba, { HookMethods } from '@barba/core'

// Import lightbox library
import imageZoom from 'image-zoom'
imageZoom()

// Import functions from functions.js
import {
  aboutAgeSeconds,
  transition,
  enterDetail,
  onceLoad,
  wideCards,
  singleCards,
  skillCards,
  filterBtns,
} from './functions.js'

import {
  hero,
  homeHero,
  aboutHero,
  workHero,
  skillsHero,
} from './heroAnimation.js'

import { borderColors } from './borderColors.js'

import { videoLightbox } from './videoLightbox.js'

// register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

// Scroll to the top of the page before the Enter animation
barba.hooks.enter(() => {
  window.scrollTo(0, 0)
})
barba.hooks.once(() => {
  window.scrollTo(0, 0)
})

// Initialise Barba
barba.init({
  // debug: true,
  sync: true,
  transitions: [
    {
      name: 'homeLoad',
      to: {
        namespace: ['home'],
      },
      once(data) {
        onceLoad()
        hero()
        homeHero()
        wideCards()
        singleCards()
      },
    },
    {
      name: 'aboutLoad',
      to: {
        namespace: ['about'],
      },
      once() {
        onceLoad()
        aboutHero()
        hero()
        wideCards()
        singleCards()
        aboutAgeSeconds()
      },
    },
    {
      name: 'workLoad',
      to: {
        namespace: ['work'],
      },
      once() {
        onceLoad()
        workHero()
        hero()
        filterBtns()
        singleCards()
      },
    },
    {
      name: 'skillsLoad',
      to: {
        namespace: ['skills'],
      },
      once() {
        onceLoad()
        skillsHero()
        hero()
        skillCards()
        filterBtns()
      },
    },
    {
      name: 'detailLoad',
      to: {
        namespace: ['detail'],
      },
      once() {
        onceLoad()
        borderColors()
        videoLightbox()
      },
    },
    {
      name: 'home',
      from: {
        namespace: ['about', 'work', 'skills', 'detail'],
      },
      to: {
        namespace: ['home'],
      },
      async leave(data) {
        transition()
        await delay(1000)
        data.current.container.remove()
      },
      async afterLeave() {
        ScrollTrigger.getAll().forEach((t) => t.kill())
      },
      async enter(data) {
        hero()
        homeHero()
        wideCards()
        singleCards()
      },
    },
    {
      name: 'about',
      from: {
        namespace: ['home', 'work', 'skills', 'detail'],
      },
      to: {
        namespace: ['about'],
      },
      async leave(data) {
        transition()
        await delay(1000)
        data.current.container.remove()
      },
      async afterLeave() {
        ScrollTrigger.getAll().forEach((t) => t.kill())
      },
      async enter(data) {
        aboutHero()
        hero()
        wideCards()
        singleCards()
        aboutAgeSeconds()
      },
    },
    {
      name: 'work',
      from: {
        namespace: ['about', 'home', 'skills', 'detail'],
      },
      to: {
        namespace: ['work'],
      },
      async leave(data) {
        transition()
        await delay(1000)
        data.current.container.remove()
      },
      async afterLeave() {
        ScrollTrigger.getAll().forEach((t) => t.kill())
      },
      async enter(data) {
        workHero()
        hero()
        filterBtns()
        singleCards()
      },
    },
    {
      name: 'skills',
      from: {
        namespace: ['about', 'work', 'home', 'detail'],
      },
      to: {
        namespace: ['skills'],
      },
      async leave(data) {
        transition()
        await delay(1000)
        data.current.container.remove()
      },
      async afterLeave() {
        ScrollTrigger.getAll().forEach((t) => t.kill())
      },
      async enter(data) {
        skillsHero()
        hero()
        skillCards()
        filterBtns()
      },
    },
    {
      name: 'toDetail',
      from: {
        namespace: ['work'],
      },
      to: {
        namespace: ['detail'],
      },
      async leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
        })
      },
      async enter(data) {
        enterDetail()
        borderColors()
        videoLightbox()
      },
    },
    {
      name: 'detailToDetail',
      from: {
        namespace: ['detail'],
      },
      to: {
        namespace: ['detail'],
      },
      async leave(data) {
        transition()
        await delay(1000)
        data.current.container.remove()
      },
      async enter(data) {
        borderColors()
        videoLightbox()
      },
    },
  ],
})

// A function to delay the promise
function delay(n) {
  n = n || 2000
  return new Promise((done) => {
    setTimeout(() => {
      done()
    }, n)
  })
}
