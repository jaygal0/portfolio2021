import BigPicture from 'bigpicture'

export function photoLightbox() {
  const about = document.getElementById('about')
  const bind = document.getElementById('bind')
  const crouchinbunny = document.getElementById('crouchinbunny')
  const galiway = document.getElementById('galiway')
  const input = document.getElementById('input')
  const kawaiicornershop = document.getElementById('kawaii')
  const photography = document.getElementById('photography')
  const reload = document.getElementById('reload')
  const tmi = document.getElementById('tmi')
  const vol = document.getElementById('vol')

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
        imgSrc: '../img/bindBanner2.png',
      })
    })
    bindUserFlow.addEventListener('click', () => {
      BigPicture({
        el: bindUserFlow,
        imgSrc: '../img/bindUserFlow.png',
      })
    })
  }
  if (crouchinbunny) {
    const crouchinBanner = document.getElementById('crouchinBanner')
    const panel1 = document.getElementById('panel1')
    const panel2 = document.getElementById('panel2')
    const panel3 = document.getElementById('panel3')
    const offline = document.getElementById('offline')

    crouchinBanner.addEventListener('click', () => {
      BigPicture({
        el: crouchinBanner,
        imgSrc: '../img/crouchinBanner.png',
      })
    })
    panel1.addEventListener('click', () => {
      BigPicture({
        el: panel1,
        imgSrc: '../img/crouchin-bunny-emotes-1.png',
      })
    })
    panel2.addEventListener('click', () => {
      BigPicture({
        el: panel2,
        imgSrc: '../img/crouchin-bunny-emotes-2.png',
      })
    })
    panel3.addEventListener('click', () => {
      BigPicture({
        el: panel3,
        imgSrc: '../img/crouchin-bunny-emotes-3.png',
      })
    })
    offline.addEventListener('click', () => {
      BigPicture({
        el: offline,
        imgSrc: '../img/crouchinbunny-offline.png',
      })
    })
  }
  if (galiway) {
    const galiwayBanner = document.getElementById('galiwayBanner')
    const illustration1 = document.getElementById('illustration1')
    const illustration2 = document.getElementById('illustration2')
    const illustration3 = document.getElementById('illustration3')
    const illustration4 = document.getElementById('illustration4')
    const illustration5 = document.getElementById('illustration5')
    const illustration6 = document.getElementById('illustration6')

    galiwayBanner.addEventListener('click', () => {
      BigPicture({
        el: galiwayBanner,
        imgSrc: '../img/galiwayBanner.png',
      })
    })
    illustration1.addEventListener('click', () => {
      BigPicture({
        el: illustration1,
        imgSrc: '../img/galiwayIllustrations1.png',
      })
    })
    illustration2.addEventListener('click', () => {
      BigPicture({
        el: illustration2,
        imgSrc: '../img/galiwayIllustrations2.png',
      })
    })
    illustration3.addEventListener('click', () => {
      BigPicture({
        el: illustration3,
        imgSrc: '../img/galiwayIllustrations3.png',
      })
    })
    illustration4.addEventListener('click', () => {
      BigPicture({
        el: illustration4,
        imgSrc: '../img/galiwayArticle3.jpg',
      })
    })
    illustration5.addEventListener('click', () => {
      BigPicture({
        el: illustration5,
        imgSrc: '../img/galiwayArticle1.jpg',
      })
    })
    illustration6.addEventListener('click', () => {
      BigPicture({
        el: illustration6,
        imgSrc: '../img/galiwayArticle2.jpg',
      })
    })
  }
  if (input) {
    const inputBanner = document.getElementById('inputBanner')
    const inputUserFlow = document.getElementById('inputUserFlow')
    inputBanner.addEventListener('click', () => {
      BigPicture({
        el: inputBanner,
        imgSrc: '../img/inputBanner.png',
      })
    })
    inputUserFlow.addEventListener('click', () => {
      BigPicture({
        el: inputUserFlow,
        imgSrc: '../img/inputUserflow.png',
      })
    })
  }
  if (kawaiicornershop) {
    const kawaiiBanner = document.getElementById('kawaiiBanner')
    const illustration1 = document.getElementById('illustration1')
    const illustration2 = document.getElementById('illustration2')
    const illustration3 = document.getElementById('illustration3')
    const illustration4 = document.getElementById('illustration4')
    kawaiiBanner.addEventListener('click', () => {
      BigPicture({
        el: kawaiiBanner,
        imgSrc: '../img/kawaiiBanner.png',
      })
    })
    illustration1.addEventListener('click', () => {
      BigPicture({
        el: illustration1,
        imgSrc: '../img/kawaiiInstagram5.png',
      })
    })
    illustration2.addEventListener('click', () => {
      BigPicture({
        el: illustration2,
        imgSrc: '../img/kawaiiInstagram1.png',
      })
    })
    illustration3.addEventListener('click', () => {
      BigPicture({
        el: illustration3,
        imgSrc: '../img/kawaiiInstagram2.png',
      })
    })
    illustration4.addEventListener('click', () => {
      BigPicture({
        el: illustration4,
        imgSrc: '../img/kawaiiInstagram3.png',
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
        imgSrc: '../img/photosForest.jpg',
      })
    })
    photo3.addEventListener('click', () => {
      BigPicture({
        el: photo3,
        imgSrc: '../img/photosReload.jpg',
      })
    })
    photo4.addEventListener('click', () => {
      BigPicture({
        el: photo4,
        imgSrc: '../img/photosLeo.jpg',
      })
    })
    photo5.addEventListener('click', () => {
      BigPicture({
        el: photo5,
        imgSrc: '../img/photosSnowball.jpg',
      })
    })
    photo6.addEventListener('click', () => {
      BigPicture({
        el: photo6,
        imgSrc: '../img/photosIsrael.jpg',
      })
    })
    photo7.addEventListener('click', () => {
      BigPicture({
        el: photo7,
        imgSrc: '../img/photosCoconut.jpg',
      })
    })
    photo8.addEventListener('click', () => {
      BigPicture({
        el: photo8,
        imgSrc: '../img/photosToriKelly.jpg',
      })
    })
    photo9.addEventListener('click', () => {
      BigPicture({
        el: photo9,
        imgSrc: '../img/photosSahara.jpg',
      })
    })
    photo10.addEventListener('click', () => {
      BigPicture({
        el: photo10,
        imgSrc: '../img/photosFriends.jpg',
      })
    })
    photo11.addEventListener('click', () => {
      BigPicture({
        el: photo11,
        imgSrc: '../img/photosJoshuaTree.jpg',
      })
    })
    photo12.addEventListener('click', () => {
      BigPicture({
        el: photo12,
        imgSrc: '../img/photosSax.jpg',
      })
    })
    photo13.addEventListener('click', () => {
      BigPicture({
        el: photo13,
        imgSrc: '../img/photosEbony.jpg',
      })
    })
  }
  if (reload) {
    const reloadBanner = document.getElementById('reloadBanner')
    const deck1 = document.getElementById('deck1')
    const deck2 = document.getElementById('deck2')
    const deck3 = document.getElementById('deck3')
    const deck4 = document.getElementById('deck4')
    const deck5 = document.getElementById('deck5')
    const deck6 = document.getElementById('deck6')
    const ebook1 = document.getElementById('ebook1')
    const ebook2 = document.getElementById('ebook2')
    const ebook3 = document.getElementById('ebook3')
    const ebook4 = document.getElementById('ebook4')
    const ebook5 = document.getElementById('ebook5')
    const ebook6 = document.getElementById('ebook6')

    reloadBanner.addEventListener('click', () => {
      BigPicture({
        el: reloadBanner,
        imgSrc: '../img/reloadLogo.png',
      })
    })
    deck1.addEventListener('click', () => {
      BigPicture({
        el: deck1,
        imgSrc: '../img/reloadDeck1.jpg',
      })
    })
    deck2.addEventListener('click', () => {
      BigPicture({
        el: deck2,
        imgSrc: '../img/reloadDeck2.jpg',
      })
    })
    deck3.addEventListener('click', () => {
      BigPicture({
        el: deck3,
        imgSrc: '../img/reloadDeck3.jpg',
      })
    })
    deck4.addEventListener('click', () => {
      BigPicture({
        el: deck4,
        imgSrc: '../img/reloadDeck4.jpg',
      })
    })
    deck5.addEventListener('click', () => {
      BigPicture({
        el: deck5,
        imgSrc: '../img/reloadDeck5.jpg',
      })
    })
    deck6.addEventListener('click', () => {
      BigPicture({
        el: deck6,
        imgSrc: '../img/reloadDeck6.jpg',
      })
    })
    ebook1.addEventListener('click', () => {
      BigPicture({
        el: ebook1,
        imgSrc: '../img/reloadBook1.jpg',
      })
    })
    ebook2.addEventListener('click', () => {
      BigPicture({
        el: ebook2,
        imgSrc: '../img/reloadBook2.jpg',
      })
    })
    ebook3.addEventListener('click', () => {
      BigPicture({
        el: ebook3,
        imgSrc: '../img/reloadBook3.jpg',
      })
    })
    ebook4.addEventListener('click', () => {
      BigPicture({
        el: ebook4,
        imgSrc: '../img/reloadBook4.jpg',
      })
    })
    ebook5.addEventListener('click', () => {
      BigPicture({
        el: ebook5,
        imgSrc: '../img/reloadBook5.jpg',
      })
    })
    ebook6.addEventListener('click', () => {
      BigPicture({
        el: ebook6,
        imgSrc: '../img/reloadBook6.jpg',
      })
    })
  }
  if (tmi) {
    console.log('hello world')
    const tmiBanner = document.getElementById('tmiBanner')

    tmiBanner.addEventListener('click', () => {
      BigPicture({
        el: tmiBanner,
        imgSrc: '../img/tmi-banner-main.png',
      })
    })
  }
  if (vol) {
    const volBanner = document.getElementById('volBanner')
    const poster = document.getElementById('volPoster')
    const quiz1 = document.getElementById('volQuiz1')
    const quiz2 = document.getElementById('volQuiz2')
    const deck1 = document.getElementById('volDeck1')
    const deck2 = document.getElementById('volDeck2')
    const deck3 = document.getElementById('volDeck3')
    const deck4 = document.getElementById('volDeck4')
    const deck5 = document.getElementById('volDeck5')

    volBanner.addEventListener('click', () => {
      BigPicture({
        el: volBanner,
        imgSrc: '../img/volBanner.jpg',
      })
    })
    poster.addEventListener('click', () => {
      BigPicture({
        el: poster,
        imgSrc: '../img/volMelissaPoster.jpg',
      })
    })
    quiz1.addEventListener('click', () => {
      BigPicture({
        el: quiz1,
        imgSrc: '../img/volQuiz1.jpg',
      })
    })
    quiz2.addEventListener('click', () => {
      BigPicture({
        el: quiz2,
        imgSrc: '../img/volQuiz2.jpg',
      })
    })
    deck1.addEventListener('click', () => {
      BigPicture({
        el: deck1,
        imgSrc: '../img/volVeganuary1.jpg',
      })
    })
    deck2.addEventListener('click', () => {
      BigPicture({
        el: deck2,
        imgSrc: '../img/volVeganuary2.jpg',
      })
    })
    deck3.addEventListener('click', () => {
      BigPicture({
        el: deck3,
        imgSrc: '../img/volVeganuary3.jpg',
      })
    })
    deck4.addEventListener('click', () => {
      BigPicture({
        el: deck4,
        imgSrc: '../img/volVeganuary4.jpg',
      })
    })
    deck5.addEventListener('click', () => {
      BigPicture({
        el: deck5,
        imgSrc: '../img/volVeganuary5.jpg',
      })
    })
  }
}
