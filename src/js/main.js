// Import barba from modules
import barba, { HookMethods } from '@barba/core'

// Import functions from functions.js
import {
  transition,
  onceLoad,
  wideCards,
  singleCards,
  skillCards,
  filterBtns,
} from './functions.js'

import {
  hero,
  homeHero,
  loadingCircles,
  workHeroColor,
  clock,
  calendar,
  seconds,
} from './heroAnimation.js'

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
        hero()
        wideCards()
        singleCards()
        loadingCircles()
      },
    },
    {
      name: 'workLoad',
      to: {
        namespace: ['work'],
      },
      once() {
        onceLoad()
        hero()
        filterBtns()
        singleCards()
        workHeroColor()
      },
    },
    {
      name: 'skillsLoad',
      to: {
        namespace: ['skills'],
      },
      once() {
        onceLoad()
        hero()
        skillCards()
        filterBtns()
        clock()
        calendar()
        seconds()
      },
    },
    {
      name: 'detailLoad',
      to: {
        namespace: ['detail'],
      },
      once() {
        onceLoad()
        hero()
        wideCards()
        singleCards()
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
        hero()
        wideCards()
        singleCards()
        loadingCircles()
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
        hero()
        filterBtns()
        singleCards()
        workHeroColor()
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
        hero()
        skillCards()
        filterBtns()
        clock()
        calendar()
        seconds()
      },
    },
    {
      name: 'detail',
      from: {
        namespace: ['about', 'work', 'home', 'skills'],
      },
      to: {
        namespace: ['detail'],
      },
      async leave(data) {
        transition()
        await delay(1000)
        data.current.container.remove()
      },
      async afterLeave() {
        ScrollTrigger.getAll().forEach((t) => t.kill())
      },
      async enter(data) {},
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
