// Import barba from modules
import barba, { HookMethods } from '@barba/core'

// Import functions from functions.js
import {
  transition,
  allanimations,
  onceLoad,
  dateAndTime,
} from './functions.js'

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
      async leave(data) {
        // Wipe transition
        transition()
        // delay barba from removing the container to allow the transition wipe to be seamless
        await delay(1000)
        data.current.container.remove()
      },
      async afterLeave() {
        // To kill and replace new scroll triggers
        ScrollTrigger.getAll().forEach((t) => t.kill())
      },
      async enter(data) {
        allanimations()
      },
      async once(data) {
        onceLoad()
        allanimations()
      },
    },
    {
      namespace: 'skills',
      async leave(data) {
        transition()
        await delay(1000)
        data.current.container.remove()
      },
      async afterLeave() {
        ScrollTrigger.getAll().forEach((t) => t.kill())
      },
      async enter(data) {
        allanimations()
        dateAndTime()
      },
      async once(data) {
        onceLoad()
        allanimations()
        dateAndTime()
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
