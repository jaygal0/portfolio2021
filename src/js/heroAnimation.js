// For all heros
export function hero() {
  titles()
  nav()
  logo()
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

// HOME PAGE
export function homeHero() {
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

// ABOUT PAGE
export function loadingCircles() {
  const circles = document.querySelectorAll('.loadingCircle')
  circles.forEach((e) => {
    e.style.opacity = 0
  })
  const tl = gsap.timeline()

  tl.to('.loadingCircle', {
    opacity: 1,
    ease: 'power1',
    duration: 1,
    yoyo: true,
    stagger: 1,
    repeat: -1,
  })
}

// WORK PAGE
export function workHeroColor() {
  const colorChange = document.querySelectorAll('.colorChange')
  const blue = document.getElementById('blue')
  const green = document.getElementById('green')
  const darkGreen = document.getElementById('darkGreen')
  const brown = document.getElementById('brown')

  green.addEventListener('click', () => {
    colorChange.forEach((e) => {
      e.style.fill = '#68C4B8'
    })
  })

  darkGreen.addEventListener('click', () => {
    colorChange.forEach((e) => {
      e.style.fill = '#28786D'
    })
  })

  brown.addEventListener('click', () => {
    colorChange.forEach((e) => {
      e.style.fill = '#C58569'
    })
  })

  blue.addEventListener('click', () => {
    colorChange.forEach((e) => {
      e.style.fill = '#0C3D5E'
    })
  })
}

// SKILLS PAGE
// Using moment.js library here
import moment from 'moment'
// To tell the time on the hero on the 'skills' page
export function clock() {
  const time = document.getElementById('time')
  if (time) {
    time.innerHTML = moment().format('LTS')
  }
}

// To tell the date on the hero on the 'skills' page
export function calendar() {
  const day = document.getElementById('day')
  const mon = document.getElementById('month')
  day.innerHTML = moment().format('Do')
  mon.innerHTML = moment().format('MMM')
}

// To make the clock() activate every second
export function seconds() {
  setInterval(() => {
    clock()
  }, 1000)
}
