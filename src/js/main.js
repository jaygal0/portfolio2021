import barba, { HookMethods } from '@barba/core'
import { transition } from './functions.js'
import { allanimations } from './functions.js'
import { onceLoad } from './functions.js'

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
      async beforeEnter(data) {
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
