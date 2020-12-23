export function borderColors() {
  const kawaii = document.getElementById('kawaii')
  const vol = document.getElementById('vol')
  const galiway = document.getElementById('galiway')
  const photography = document.getElementById('photography')
  const reload = document.getElementById('reload')
  const crouchinbunny = document.getElementById('crouchinbunny')
  const input = document.getElementById('input')

  if (kawaii) {
    let colors = ['#ef598f', '#b3d7f2', '#f5ccd4', '#f7f0e8'],
      duration = 3,
      gap = 0.5

    let tlHome = gsap.timeline({
      repeat: -1,
      repeatRefresh: true,
    })

    colors.forEach(function (color, index) {
      tlHome.to(
        '.detail',
        {
          duration: 3,
          borderTopColor: color,
        },
        (duration + gap) * index
      )
    })
  } else if (vol) {
    let colors = ['#ffe47b', '#2b2f32'],
      duration = 3,
      gap = 0.5

    let tlHome = gsap.timeline({
      repeat: -1,
      repeatRefresh: true,
    })

    colors.forEach(function (color, index) {
      tlHome.to(
        '.detail',
        {
          duration: 3,
          borderTopColor: color,
        },
        (duration + gap) * index
      )
    })
  } else if (galiway) {
    let colors = ['#253628', '#49654C', '#8AA989', '#EBEBE9'],
      duration = 3,
      gap = 0.5

    let tlHome = gsap.timeline({
      repeat: -1,
      repeatRefresh: true,
    })

    colors.forEach(function (color, index) {
      tlHome.to(
        '.detail',
        {
          duration: 3,
          borderTopColor: color,
        },
        (duration + gap) * index
      )
    })
  } else if (photography) {
    let colors = ['#e38a2c', '#2299bb', '#427f95', '#dbe0eb'],
      duration = 3,
      gap = 0.5

    let tlHome = gsap.timeline({
      repeat: -1,
      repeatRefresh: true,
    })

    colors.forEach(function (color, index) {
      tlHome.to(
        '.detail',
        {
          duration: 3,
          borderTopColor: color,
        },
        (duration + gap) * index
      )
    })
  } else if (reload) {
    let colors = ['#2d2d2f', '#f09220', '#ffffff'],
      duration = 3,
      gap = 0.5

    let tlHome = gsap.timeline({
      repeat: -1,
      repeatRefresh: true,
    })

    colors.forEach(function (color, index) {
      tlHome.to(
        '.detail',
        {
          duration: 3,
          borderTopColor: color,
        },
        (duration + gap) * index
      )
    })
  } else if (crouchinbunny) {
    let colors = ['#9dc3e2', '#e2b9db', '#ffffff', '#ffb5cc'],
      duration = 3,
      gap = 0.5

    let tlHome = gsap.timeline({
      repeat: -1,
      repeatRefresh: true,
    })

    colors.forEach(function (color, index) {
      tlHome.to(
        '.detail',
        {
          duration: 3,
          borderTopColor: color,
        },
        (duration + gap) * index
      )
    })
  } else if (input) {
    let colors = [
        '#227C9D',
        '#31C8B9',
        '#FE6D73',
        '#FEF9EF',
        '#FFCB77',
        '#C9C9C9',
      ],
      duration = 3,
      gap = 0.5

    let tlHome = gsap.timeline({
      repeat: -1,
      repeatRefresh: true,
    })

    colors.forEach(function (color, index) {
      tlHome.to(
        '.detail',
        {
          duration: 3,
          borderTopColor: color,
        },
        (duration + gap) * index
      )
    })
  }
}
