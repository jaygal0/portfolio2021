// Import BigPicture YouTube modal library
import BigPicture from 'bigpicture'

export function videoLightbox() {
  const reload = document.getElementById('reload')
  const galiway = document.getElementById('galiway')
  if (reload) {
    const vid1 = document.querySelectorAll('.video1')
    const vid2 = document.querySelectorAll('.video2')
    const vid3 = document.querySelectorAll('.video3')

    vid1.forEach((e) => {
      e.addEventListener('click', () => {
        BigPicture({
          el: e,
          ytSrc: 'bZStXj9B2_U',
        })
      })
    })

    vid2.forEach((e) => {
      e.addEventListener('click', () => {
        BigPicture({
          el: e,
          ytSrc: 'PaoZHxYxK90',
        })
      })
    })

    vid3.forEach((e) => {
      e.addEventListener('click', () => {
        BigPicture({
          el: e,
          ytSrc: 'Gr3ZH2x68OY',
        })
      })
    })
  } else if (galiway) {
    const vid1 = document.querySelectorAll('.video1')
    const vid2 = document.querySelectorAll('.video2')

    vid1.forEach((e) => {
      e.addEventListener('click', () => {
        BigPicture({
          el: e,
          ytSrc: 'yNUm50yJo34',
        })
      })
    })

    vid2.forEach((e) => {
      e.addEventListener('click', () => {
        BigPicture({
          el: e,
          ytSrc: 'SiuX6ZRpbs0',
        })
      })
    })
  }
}
