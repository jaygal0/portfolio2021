// To create the wipe transition
export function transition() {
  const tl = gsap.timeline()

  tl.fromTo(
    '.transition__box',
    {
      duration: 2,
      scaleX: 0,
      skewX: 15,
      x: '-10vw',
    },
    {
      duration: 1,
      scaleX: 1,
      transformOrigin: 'left',
      stagger: 0.2,
      ease: 'power3',
      skewX: 0,
      x: 0,
    }
  )

  tl.to('.transition__box', {
    duration: 0.5,
    scaleX: 0,
    transformOrigin: 'right',
    stagger: 0.1,
    delay: 0.1,
    ease: 'power4',
  })
}

export function enterDetail() {
  const tl = gsap.timeline()

  tl.from('.detail', {
    y: '100%',
    duration: 1,
    ease: 'power3',
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
export function wideCards() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.wideCard',
      markers: false,
      start: 'top bottom',
      end: 'bottom top',
      toggleActions: 'restart none none reset',
    },
  })

  tl.from('.wideCard', {
    duration: 1,
    opacity: 0,
    scale: 0.9,
    y: '19%',
    ease: 'elastic',
    stagger: 0.2,
  })
}

// To create the single card pop up animations
export function singleCards() {
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
    stagger: 0.2,
  })
}

export function skillCards() {
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
    delay: 0.4,
    duration: 1,
    stagger: 0.1,
  })
    .from(
      '.skillsbox__textbox--h4',
      {
        duration: 1,
      },
      '-=2'
    )
    .from(
      '.skillsbox__textbox--h2',
      {
        duration: 1,
      },
      '-=1.9'
    )
    .from(
      '.skillsbox__textbox--level',
      {
        duration: 1,
        stagger: 0.2,
      },
      '-=1'
    )
    .from(
      '.bar',
      {
        duration: 1,
        stagger: 0.2,
        transformOrigin: 'left',
        scaleX: 0,
        scaleY: 1,
        y: 0,
        ease: 'power4',
      },
      '-=3'
    )
    .from(
      '.skillsbox__line',
      {
        duration: 2,
        stagger: 0.5,
        transformOrigin: 'left',
        scaleX: 0,
        ease: 'power2',
      },
      '-=4'
    )
}

export function filterBtns() {
  const filterBtns = document.querySelectorAll('.filter__btns')
  const skills = document.querySelectorAll('.skillsbox')
  const workCards = document.querySelectorAll('.singleCard')

  filterBtns.forEach((e) => {
    e.addEventListener('click', () => {
      let filterName = e.innerText.toLowerCase()
      filterBtns.forEach((e) => {
        e.classList.remove('activeBtn')
      })
      e.classList.add('activeBtn')

      skills.forEach((e) => {
        let skillsFilter = e.getAttribute('data-filter').split(' ')
        e.style.display = 'none'

        if (skillsFilter.includes(filterName)) {
          e.style.display = 'block'
        } else if (filterName === 'all') {
          e.style.display = 'block'
        }
      })
      workCards.forEach((e) => {
        let skillsFilter = e.getAttribute('data-filter').split(' ')
        e.style.display = 'none'

        if (skillsFilter.includes(filterName)) {
          e.style.display = 'flex'
        } else if (filterName === 'all') {
          e.style.display = 'flex'
        }
      })
    })
  })
}

// To calculate my age on the about page
import moment from 'moment'
export function age() {
  const about = document.getElementById('about')
  if (about) {
    const ageYears = document.getElementById('ageYears')
    const yearsOld = moment().diff([1989, 6, 30], 'years')
    const currentYear = moment().year()
    const beforeCurrentYear = moment([currentYear - 1, 6, 30])
    const today = moment()
    const days = today.diff(beforeCurrentYear, 'days')

    ageYears.innerHTML = `${yearsOld} years &amp; ${days} days old`
  }
}
age()

export function footerYear() {
  const year = document.getElementById('footerYear')
  if (year) {
    const currentYear = moment().year()
    year.innerText = currentYear
  }
}

export function hamburger() {
  const hamburger = document.getElementById('hamburger')
  const nav = document.querySelector('.nav__navbar')
  const navClose = document.getElementById('navClose')

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav__navbar--toggle')
  })
  navClose.addEventListener('click', () => {
    nav.classList.toggle('nav__navbar--toggle')
  })
}
