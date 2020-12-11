import barba, { HookMethods } from '@barba/core'
// import barbaCss from '@barba/css'

// // tell Barba to use the css plugin
// barba.use(barbaCss)

// register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

barba.hooks.enter(() => {
  window.scrollTo(0, 0)
})

// Initialise Barba
barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        transition()
        await delay(1000)
        data.current.container.remove()
      },
      async beforeEnter(data) {
        ScrollTrigger.getAll().forEach((t) => t.kill())
      },
      async enter(data) {
        wideCards()
        singleCards()
        content()

        console.log('entering')
        // transition()
      },
      once(data) {
        wideCards()
      },
    },
  ],
})

function transition() {
  const tl = gsap.timeline()

  tl.to('.transition li', {
    duration: 0.8,
    scaleX: 1,
    transformOrigin: 'left',
    stagger: 0.2,
  })

  tl.to('.transition li', {
    duration: 1,
    scaleX: 0,
    transformOrigin: 'right',
    stagger: 0.1,
    delay: 0.1,
  })
}

function wideCards() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.widecard',
      markers: true,
      start: 'top 85%',
      end: 'bottom 60%',
      toggleActions: 'restart none none none',
    },
  })

  tl.from('.widecard', {
    duration: 1,
    opacity: 0,
    scale: 0.9,
    y: '19%',
    ease: 'elastic',
    stagger: 0.5,
  })
}

function singleCards() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.singleCard',
      markers: true,
      start: 'top 85%',
      end: 'bottom 60%',
      toggleActions: 'restart none none none',
    },
  })

  tl.from('.singleCard', {
    duration: 1,
    opacity: 0,
    scale: 0.9,
    y: '19%',
    ease: 'elastic',
    stagger: 0.5,
  })
}

function content() {
  const tl = gsap.timeline()

  tl.from('.container', {
    opacity: 0,
    duration: 2,
    delay: 1,
  })
}

function delay(n) {
  n = n || 2000
  return new Promise((done) => {
    setTimeout(() => {
      done()
    }, n)
  })
}
