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
export function aboutHero() {
  const tl = gsap.timeline({
    defaults: {
      transformOrigin: 'center',
      ease: 'elastic',
      duration: 1,
      scale: 0,
      opacity: 0,
    },
  })

  tl.from('#blob', {
    delay: 0.6,
    scale: 0.9,
  })
    .from(
      '#canvas',
      {
        rotate: 0,
        scale: 0.7,
      },
      '-=.3'
    )
    .from('#profileCircle', { duration: 0.4 }, '-=.6')
    .from('#profileFace', {})
    .from(
      '#text',
      {
        duration: 0.8,
        scale: 1,
        x: '-10%',
        ease: 'power4',
      },
      '-=1.4'
    )
    .from('#sidebar', {}, '-=2')
    .from(
      '#sidebarPhoto',
      {
        scale: 1,
        y: '-50%',
      },
      '-=.5'
    )
    .from('#sidebarText', { duration: 0.8 }, '-=.3')
    .from('#image', {}, '-=.4')
    .from('#loading', {})
    .from('#button', {})

  function loadingCircles() {
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
  loadingCircles()
}

// WORK PAGE
export function workHero() {
  const tl = gsap.timeline({
    defaults: {
      transformOrigin: 'center',
      ease: 'elastic',
      duration: 1,
      scale: 0,
      opacity: 0,
    },
  })

  tl.from('#monitor', { ease: 'power3', delay: 1, scale: 0.8 })
    .from('#stand', { scale: 0.9 }, '-=1')
    .from('#behindCanvas', { scale: 0.9, ease: 'power4' }, '-=1')
    .from('#canvasWhite', { scale: 0.9, ease: 'power4' }, '-=1')
    .from('#changeColor', { scale: 0.9, ease: 'power4' }, '-=1')
    .from('#interface', { scale: 0.9, ease: 'power1' }, '-=1')
    .from('#swatch', { scale: 1, ease: 'power2' }, '-=.5')
    .from('#text', { duration: 0.7 }, '-=.4')
    .from('#blue', {}, '-=1')
    .from('#green', {}, '-=1')
    .from('#darkGreen', {}, '-=1')
    .from('#brown', {}, '-=1')
    .from(
      '#dummyText',
      { duration: 0.4, scale: 1, x: '-2%', ease: 'power3' },
      '-=.8'
    )
    .from('#toolsRight', { scale: 0.8 }, '-=.5')
    .from('#toolsLeft', { scale: 0.8 }, '-=.9')
    .from('#icon', {})

  // To make the 'Select color' bounce
  function selectColor() {
    gsap.fromTo(
      '#text',
      {
        delay: 2,
        scale: 1,
        duration: 1,
      },
      {
        scale: 1.05,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: 'ease',
        yoyoEase: 'ease-in',
        transformOrigin: 'center',
      }
    )
  }
  selectColor()

  // To make the color swatches interactive
  function workHeroColor() {
    const colorChange = document.querySelectorAll('.colorChange')
    const blue = document.getElementById('blue')
    const green = document.getElementById('green')
    const darkGreen = document.getElementById('darkGreen')
    const brown = document.getElementById('brown')

    green.addEventListener('click', () => {
      colorChange.forEach((e) => {
        e.style.fill = '#68C4B8'
        gsap.fromTo(
          '#changeColor',
          {
            scale: 1,
            duration: 1,
          },
          {
            scale: 1.05,
            ease: 'elastic',
            duration: 0.1,
            yoyo: true,
            transformOrigin: 'center',
            yoyoEase: 'power1',
            repeat: 1,
          }
        )
      })
    })

    darkGreen.addEventListener('click', () => {
      colorChange.forEach((e) => {
        e.style.fill = '#28786D'

        gsap.fromTo(
          '#changeColor',
          {
            scale: 1,
            duration: 1,
          },
          {
            scale: 1.05,
            ease: 'elastic',
            duration: 0.1,
            yoyo: true,
            transformOrigin: 'center',
            yoyoEase: 'power1',
            repeat: 1,
          }
        )
      })
    })

    brown.addEventListener('click', () => {
      colorChange.forEach((e) => {
        e.style.fill = '#C58569'
        gsap.fromTo(
          '#changeColor',
          {
            scale: 1,
            duration: 1,
          },
          {
            scale: 1.05,
            ease: 'elastic',
            duration: 0.1,
            yoyo: true,
            transformOrigin: 'center',
            yoyoEase: 'power1',
            repeat: 1,
          }
        )
      })
    })

    blue.addEventListener('click', () => {
      colorChange.forEach((e) => {
        e.style.fill = '#72a5c4'
        gsap.fromTo(
          '#changeColor',
          {
            scale: 1,
            duration: 1,
          },
          {
            scale: 1.05,
            ease: 'elastic',
            duration: 0.1,
            yoyo: true,
            transformOrigin: 'center',
            yoyoEase: 'power1',
            repeat: 1,
          }
        )
      })
    })
  }
  workHeroColor()
}

// SKILLS PAGE
// Using moment.js library here
import moment from 'moment'
export function skillsHero() {
  const tl = gsap.timeline({
    defaults: {
      opacity: 0,
      transformOrigin: 'center',
      scale: 0.7,
      duration: 1,
      ease: 'elastic',
    },
  })

  tl.from('#monitor', { delay: 1, scale: 0.7 })
    .from('#table', {}, '-=.8')
    .from(
      '#stand',
      {
        ease: 'power3',
        duration: 0.2,
        scaleY: 0,
        transformOrigin: 'top',
      },
      '-=1'
    )
    .from('#blobLeft', {}, '-=1')
    .from('#blobRight', {}, '-=1')
    .from(
      '#me',
      {
        scaleY: 0,
        ease: 'power2',
        transformOrigin: 'bottom',
        duration: '.3',
      },
      '-=1.3'
    )
    .from('#buttons', {}, '-=.3')
    .from('#videoBackground', {}, '-=.8')
    .from('#calendar', {}, '-=.4')
    .from('#day', { scale: 1, ease: 'power4' }, '-=.9')
    .from('#month', { scale: 1, ease: 'power4' }, '-=.8')
    .from('#time', { scale: 1, ease: 'power4' }, '-=.6')
    .to('#blobRight', {
      rotate: 3,
      scale: 1,
      yoyo: true,
      repeat: -1,
      duration: 2,
      opacity: 1,
    })
    .to(
      '#blobLeft',
      {
        rotate: 15,
        scale: 1,
        yoyo: true,
        yoyoEase: 'power2',
        repeat: -1,
        duration: 2,
        opacity: 1,
      },
      '-=.4'
    )

  // To tell the time on the hero on the 'skills' page
  function clock() {
    const time = document.getElementById('time')
    if (time) {
      time.innerHTML = moment().format('LTS')
    }
  }
  clock()

  // To tell the date on the hero on the 'skills' page
  function calendar() {
    const day = document.getElementById('day')
    const mon = document.getElementById('month')
    day.innerHTML = moment().format('Do')
    mon.innerHTML = moment().format('MMM')
  }
  calendar()

  // To make the clock() activate every second
  function seconds() {
    setInterval(() => {
      clock()
    }, 1000)
  }
  seconds()
}
