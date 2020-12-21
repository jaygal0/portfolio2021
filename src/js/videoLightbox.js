// Import BigPicture YouTube modal library
import BigPicture from 'bigpicture'

export function videoLightbox() {
  const reload = document.getElementById('reload')
  const galiway = document.getElementById('galiway')
  if (reload) {
    const element = document.getElementById('element')

    element.addEventListener('click', () => {
      BigPicture({
        el: element,
        ytSrc: 'z_PeaHVcohg',
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
