export function allanimations() {
  titles()
  wideCards()
  singleCards()
  skillCards()
  filterBtns()
  nav()
}

// To create the wipe transition
export function transition() {
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

export function onceLoad() {
  const tl = gsap.timeline()

  tl.from('.container', {
    opacity: 0,
    duration: 2,
    delay: 0.8,
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

function filterBtns() {
  const filterBtns = document.querySelectorAll('.filter__btns')
  const skills = document.querySelectorAll('.skillsbox')
  const workCards = document.querySelectorAll('.singleCard')

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

function nav() {
  const tl = gsap.timeline()

  tl.from('.nav__logo', {
    opacity: 0,
    delay: 2,
    duration: 1,
    x: '-2rem',
    ease: 'power5',
  }).from('.nav__link', {
    opacity: 0,
    duration: 0.5,
    x: '-2rem',
    ease: 'power5',
    stagger: 0.7,
  })
}
