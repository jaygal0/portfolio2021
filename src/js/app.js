import barba, { HookMethods } from '@barba/core'

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

function allanimations() {
  titles()
  wideCards()
  singleCards()
  skillCards()
  filterBtns()
}

// To create the wipe transition
function transition() {
  const tl = gsap.timeline()

  tl.to('.transition__box', {
    duration: 1,
    scaleX: 1,
    transformOrigin: 'left',
    stagger: 0.2,
    ease: 'power3',
  })

  tl.to('.transition__box', {
    duration: 0.5,
    scaleX: 0,
    transformOrigin: 'right',
    stagger: 0.1,
    delay: 0.1,
    ease: 'power4',
  })
}

// To create the wide card pop up animations
function wideCards() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.widecard',
      markers: false,
      start: 'top bottom',
      end: 'bottom top',
      toggleActions: 'restart none none reset',
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

// To create the single card pop up animations
function singleCards() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.singleCard',
      markers: false,
      start: 'top bottom',
      end: 'bottom top',
      toggleActions: 'restart none none reset',
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

function skillCards() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.skillsbox__img',
      markers: false,
      start: 'top bottom',
      end: 'bottom top',
      toggleActions: 'restart none none reset',
    },
    defaults: {
      opacity: 0,
      scale: 0.9,
      y: '20%',
      ease: 'elastic',
    },
  })

  tl.from('.skillsbox__img', {
    duration: 1,
    stagger: 0.1,
  })
    .from(
      '.skillsbox__textbox--h4',
      {
        duration: 1,
      },
      '-=1'
    )
    .from(
      '.skillsbox__textbox--h2',
      {
        duration: 1,
      },
      '-=.9'
    )
    .from(
      '.skillsbox__textbox--level',
      {
        duration: 1,
        stagger: 0.2,
      },
      '-=.3'
    )
    .from('.skillsbox__line', {
      duration: 3,
      stagger: 0.5,
    })
}

function titles() {
  const tl = gsap.timeline()

  tl.from('#title', {
    opacity: 0,
    delay: 1,
    duration: 0.5,
    y: '-20px',
    ease: 'power3',
  }).from('#subtitle', {
    opacity: 0,
    duration: 1,
    y: '30px',
    ease: 'power2',
  })
}

function onceLoad() {
  const tl = gsap.timeline()

  tl.from('.container', {
    opacity: 0,
    duration: 2,
    delay: 0.8,
  })
}

function filterBtns() {
  const filterBtns = document.querySelectorAll('.filter__btns')
  const skills = document.querySelectorAll('.skillsbox')
  const workCards = document.querySelectorAll('.cardContainer')

  filterBtns.forEach((e) => {
    e.addEventListener('click', () => {
      let filterName = e.innerText
      filterBtns.forEach((e) => {
        e.classList.remove('activeBtn')
      })
      e.classList.add('activeBtn')

      skills.forEach((e) => {
        let skillsFilter = e.getAttribute('data-filter')
        e.style.display = 'none'

        if (filterName === skillsFilter) {
          e.style.display = 'block'
        } else if (filterName === 'all') {
          e.style.display = 'block'
        }
      })
      workCards.forEach((e) => {
        let skillsFilter = e.getAttribute('data-filter')
        e.style.display = 'none'

        if (filterName === skillsFilter) {
          e.style.display = 'flex'
        } else if (filterName === 'all') {
          e.style.display = 'flex'
        }
      })
    })
  })
}

// A function to delay the promise
function delay(n) {
  n = n || 2000
  return new Promise((done) => {
    setTimeout(() => {
      done()
    }, n)
  })
}
