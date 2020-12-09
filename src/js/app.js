import barba, { HookMethods } from '@barba/core'
import barbaCss from '@barba/css'

// tell Barba to use the css plugin
barba.use(barbaCss)

// barba.hooks.before(() => {
//   window.scrollTo(0, 0)
// })

barba.hooks.enter(() => {
  window.scrollTo(0, 0)
})

// init Barba
barba.init({
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
      leave() {},
      enter() {},
    },
  ],
})
