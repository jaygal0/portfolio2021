import barba, { HookMethods } from '@barba/core'
import barbaCss from '@barba/css'

// tell Barba to use the css plugin
barba.use(barbaCss)

// register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

// Wide Card animations
gsap.from('.widecard', {
  scrollTrigger: {
    trigger: '.widecard',
    toggleActions: 'restart none none none',
    // start: 'center bottom',
    // end: 'center top',
    // markers: true,
  },
  duration: 1,
  opacity: 0,
  scale: 0.9,
  y: '19%',
  ease: 'elastic',
  stagger: 0.5,
})

gsap.from('.singleCard', {
  scrollTrigger: {
    trigger: '.singleCard',
    toggleActions: 'restart none none none',
    // start: 'center bottom',
    // end: 'center top',
    // markers: true,
  },
  duration: 1,
  opacity: 0,
  scale: 0.9,
  y: '19%',
  ease: 'elastic',
  stagger: 0.5,
})

barba.hooks.enter(() => {
  window.scrollTo(0, 0)
})

// Initialise Barba
barba.init({
  sync: true,
  transitions: [
    {
      name: 'home',
      once() {},
      leave() {},
      enter() {},
    },
    {
      name: 'cover',
      to: {
        namespace: ['home', 'about', 'work', 'skills', 'detail'],
      },
      leave(data) {
        data.current.container.remove()
        // await delay(1000)
      },
      beforeEnter(data) {
        ScrollTrigger.getAll().forEach((t) => t.kill())
      },
      enter(data) {},
    },
  ],
})

// const card = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.widecard .singleCard',
//     start: 'center bottom',
//     toggleActions: 'restart none none none',
//   },
//   defaults: {
//     duration: 1,
//     opacity: 0,
//     scale: 0.9,
//     y: '10%',
//     ease: 'elastic',
//   },
// })

// card
//   .from('.widecard', { stagger: 0.2 })
//   .from('.singleCard', { stagger: 0.2 }, '-=.5')
