import BigPicture from 'bigpicture'

export function photoLightbox() {
  const about = document.getElementById('about')
  const bind = document.getElementById('bind')
  // const crouchinbunny = document.getElementById('about')
  // const galiway = document.getElementById('about')
  // const input = document.getElementById('about')
  // const kawaiicornershop = document.getElementById('about')
  const photography = document.getElementById('photography')
  // const reload = document.getElementById('about')
  // const vol = document.getElementById('about')

  if (about) {
    const profile = document.getElementById('profile')
    profile.addEventListener('click', () => {
      BigPicture({
        el: profile,
        imgSrc: './img/profile.jpg',
      })
    })
  }
  if (bind) {
    const bindBanner = document.getElementById('bindBanner')
    const bindUserFlow = document.getElementById('bindUserFlow')

    bindBanner.addEventListener('click', () => {
      BigPicture({
        el: bindBanner,
        imgSrc: '../img/profile.jpg',
      })
    })
    bindUserFlow.addEventListener('click', () => {
      BigPicture({
        el: bindUserFlow,
        imgSrc: '../img/bindUserFlow.png',
      })
    })
  }
  if (photography) {
    const photo1 = document.getElementById('photo1')
    const photo2 = document.getElementById('photo2')
    const photo3 = document.getElementById('photo3')
    const photo4 = document.getElementById('photo4')
    const photo5 = document.getElementById('photo5')
    const photo6 = document.getElementById('photo6')
    const photo7 = document.getElementById('photo7')
    const photo8 = document.getElementById('photo8')
    const photo9 = document.getElementById('photo9')
    const photo10 = document.getElementById('photo10')
    const photo11 = document.getElementById('photo11')
    const photo12 = document.getElementById('photo12')
    const photo13 = document.getElementById('photo13')

    photo1.addEventListener('click', () => {
      BigPicture({
        el: photo1,
        imgSrc: '../img/photosSaharaWalk.jpg',
      })
    })
    photo2.addEventListener('click', () => {
      BigPicture({
        el: photo2,
        imgSrc: '../img/photosSaharaWalk.jpg',
      })
    })
    photo3.addEventListener('click', () => {
      BigPicture({
        el: photo3,
        imgSrc: '../img/photosSaharaWalk.jpg',
      })
    })
    photo4.addEventListener('click', () => {
      BigPicture({
        el: photo4,
        imgSrc: '../img/photosSaharaWalk.jpg',
      })
    })
    photo5.addEventListener('click', () => {
      BigPicture({
        el: photo5,
        imgSrc: '../img/photosSaharaWalk.jpg',
      })
    })
    photo6.addEventListener('click', () => {
      BigPicture({
        el: photo6,
        imgSrc: '../img/photosSaharaWalk.jpg',
      })
    })
    photo7.addEventListener('click', () => {
      BigPicture({
        el: photo7,
        imgSrc: '../img/photosSaharaWalk.jpg',
      })
    })
    photo8.addEventListener('click', () => {
      BigPicture({
        el: photo8,
        imgSrc: '../img/photosSaharaWalk.jpg',
      })
    })
    photo9.addEventListener('click', () => {
      BigPicture({
        el: photo9,
        imgSrc: '../img/photosSaharaWalk.jpg',
      })
    })
    photo10.addEventListener('click', () => {
      BigPicture({
        el: photo10,
        imgSrc: '../img/photosSaharaWalk.jpg',
      })
    })
    photo11.addEventListener('click', () => {
      BigPicture({
        el: photo11,
        imgSrc: '../img/photosSaharaWalk.jpg',
      })
    })
    photo12.addEventListener('click', () => {
      BigPicture({
        el: photo12,
        imgSrc: '../img/photosSaharaWalk.jpg',
      })
    })
    photo13.addEventListener('click', () => {
      BigPicture({
        el: photo13,
        imgSrc: '../img/photosSaharaWalk.jpg',
      })
    })
  }
}
