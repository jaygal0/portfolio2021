export function allanimations() {
  titles()
  wideCards()
  singleCards()
  skillCards()
  filterBtns()
  nav()
  logo()
  heroHome()
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

function titles() {
  const tl = gsap.timeline()

  tl.from('#title', {
    opacity: 0,
    delay: 4,
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

function logo() {
  const logo = document.getElementById('logo')
  const tl = gsap.timeline()

  logo.addEventListener('mouseenter', () => {
    tl.to(logo, {
      overwrite: 'auto',
      rotate: 180,
      duration: 2,
      ease: 'elastic',
    })
  })
  logo.addEventListener('mouseleave', () => {
    tl.to(logo, {
      rotate: 0,
      duration: 1,
      ease: 'elastic',
    })
  })
}

function heroHome() {
  const blob = gsap.timeline({
    defaults: {
      transformOrigin: 'center',
      ease: 'elastic',
      duration: 1,
      scale: 0,
      rotate: 90,
      opacity: 0,
    },
  })

  const body = gsap.timeline({
    defaults: {
      transformOrigin: 'bottom',
      ease: 'elastic',
      duration: 1,
      scale: 0,
      y: 90,
      opacity: 0,
    },
  })

  blob
    .from('#blobMiddle', {
      delay: 2,
      rotate: 0,
      scale: 0.7,
      y: '20%',
      transformOrigin: 'bottom',
    })
    .from(
      '#blobRight',
      {
        scale: 0.8,
      },
      '-=1.5'
    )
    .from('#blobLeft', {}, '-=1.6')
    .to('#blobRight', {
      rotate: 2,
      yoyo: true,
      repeat: -1,
      ease: 'power3',
      yoyoEase: 'power1',
      opacity: 1,
      scale: 1.1,
      duration: 3,
    })
    .to(
      '#blobLeft',
      {
        rotate: -5,
        yoyo: true,
        repeat: -1,
        ease: 'power3',
        yoyoEase: 'power1',
        opacity: 1,
        scale: 1.1,
        duration: 3,
      },
      '-=.5'
    )

  body
    .from('#tshirt', {
      delay: 2.7,
      scale: 0.9,
      y: 4,
      ease: 'expo',
    })
    .from(
      '#face',
      {
        y: 0,
        scale: 0.9,
      },
      '-=2.5'
    )
    .from(
      ['#eyes', '#smile'],
      {
        scale: 0.9,
        y: 4,
        duration: 1,
      },
      '-=2'
    )
    .from(
      '#nose',
      {
        duration: 0.4,
        ease: 'power3',
        rotate: -89,
        scale: 0.9,
        y: 0,
      },
      '-=1.2'
    )
    .from(['#mustache', '#beard', '#hair', '#eyebrows'], {
      scale: 0.8,
      transformOrigin: 'center',
    })
}

function filterBtns() {
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
        console.log(skillsFilter)
        console.log(filterName)
        e.style.display = 'none'

        if (skillsFilter.includes(filterName)) {
          e.style.display = 'block'
        } else if (filterName === 'all') {
          e.style.display = 'block'
        }
      })
      workCards.forEach((e) => {
        let skillsFilter = e.getAttribute('data-filter')
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

function nav() {
  const tl = gsap.timeline({
    defaults: {
      overwrite: 'auto',
      opacity: 0,
      scale: 0.5,
      ease: 'elastic',
    },
  })

  tl.from('.nav__logo', {
    delay: 1.5,
    duration: 2,
    rotate: -180,
    y: '2rem',
  }).from(
    '.nav__link',
    {
      duration: 3,
      stagger: 0.7,
    },
    '-=1.5'
  )
}

import moment from 'moment'

export function dateAndTime() {
  clock()
  calendar()
  seconds()
}

function clock() {
  const time = document.getElementById('time')
  time.innerHTML = moment().format('LTS')
}

function calendar() {
  const day = document.getElementById('day')
  const mon = document.getElementById('month')
  day.innerHTML = moment().format('Do')
  mon.innerHTML = moment().format('MMM')
}

function seconds() {
  setInterval(() => {
    clock()
  }, 1000)
}
