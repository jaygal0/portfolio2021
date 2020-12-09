import barba, { HookMethods } from '@barba/core'
import barbaCss from '@barba/css'

// tell Barba to use the css plugin
barba.use(barbaCss)

barba.hooks.before(() => {
  window.scrollTo(0, 0)
})
barba.hooks.enter(() => {
  window.scrollTo(0, 0)
})

// init Barba
barba.init({
  transitions: [
    {
      name: 'home',
      sync: true,
      once() {},
      leave() {},
      enter() {},
    },
    {
      name: 'fade',
      to: {
        namespace: ['fade'],
      },
      leave() {},
      enter() {},
    },
    {
      name: 'clip',
      sync: true,
      to: {
        namespace: ['clip'],
      },
      leave() {},
      enter() {},
    },
    {
      name: 'cover',
      to: {
        namespace: ['home', 'about', 'work', 'skills'],
      },
      leave() {},
      enter() {},
    },
  ],
})
