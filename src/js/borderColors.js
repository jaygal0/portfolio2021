export function kawaiiBorder() {
  const kawaii = document.getElementById('kawaii')
  if (kawaii) {
    let colors = ['#f7f0e8', '#ef598f', '#b3d7f2', '#f5ccd4'],
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

export function volBorder() {
  const vol = document.getElementById('vol')
  if (vol) {
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
  }
}

export function galiwayBorder() {
  const galiway = document.getElementById('galiway')
  if (galiway) {
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
  }
}

export function photographyBorder() {
  const photography = document.getElementById('photography')
  if (photography) {
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
  }
}

export function reloadBorder() {
  const reload = document.getElementById('reload')
  if (reload) {
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
  }
}
