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
    const vid1 = document.getElementById('vid1')
    const vid2 = document.getElementById('vid2')

    vid1.addEventListener('click', () => {
      BigPicture({
        el: vid1,
        ytSrc: 'yNUm50yJo34',
      })
    })
    vid2.addEventListener('click', () => {
      BigPicture({
        el: vid2,
        ytSrc: 'SiuX6ZRpbs0',
      })
    })
  }
}
